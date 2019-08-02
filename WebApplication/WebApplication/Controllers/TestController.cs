using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication.Models;
using WebApplication.ViewModel;

namespace WebApplication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Roles = "Coach")]
    public class TestController : ControllerBase
    {
        private readonly ApplicationDbContext context;

        public TestController(ApplicationDbContext context)
        {
            this.context = context;
        }

        [HttpGet]
        [Route("GetAllTests")]
        public async Task<IActionResult> GetTestListAsync()
        {
            return Ok(await context.TestTypeMappers.Include(t => t.Test.UserTestMappers).Include(t => t.TestType).OrderByDescending(t => t.Test.Date).ToListAsync());
        }

        [HttpGet]
        [Route("GetTestTypes")]
        public async Task<IActionResult> GetTestTypesAsync()
        {
            return Ok(await context.TestTypes.ToListAsync());
        }

        [HttpGet]
        [Route("GetTestById/{id}")]
        public async Task<IActionResult> GetTestByIdAsync([FromRoute] int id)
        {
            var test = await context.TestTypeMappers.Include(t => t.Test).ThenInclude(t => t.UserTestMappers).ThenInclude(t => t.Users).Include(t => t.TestType).Where(t => t.TestID == id).ToListAsync();
            List<UserTestMapper> user = new List<UserTestMapper>();

            foreach (var item in test)
            {
                foreach (var users in item.Test.UserTestMappers)
                {
                    if (users.CooperTestDistance != null)
                    {
                        user = await context.UserTestMappers.Where(u => u.TestID == id).OrderByDescending(u => u.CooperTestDistance).ToListAsync();
                    }
                    else
                    {
                        user = await context.UserTestMappers.Where(u => u.TestID == id).OrderBy(u => u.SprintTestTime).ToListAsync();
                    }
                    item.Test.UserTestMappers = user;
                }
            }
            return Ok(test);
        }

        [HttpPost]
        [Route("CreateTest")]
        public async Task<IActionResult> CreateTestAsync([FromBody] CreateTestViewModel model)
        {
            TestType testType = await context.TestTypes.FirstOrDefaultAsync(t => t.Name == model.TestType);
            TestTypeMapper testTypeMapper = new TestTypeMapper();
            Test test = new Test();

            if (ModelState.IsValid)
            {
                test.Date = model.Date;
                context.Tests.Add(test);

                testTypeMapper.TestID = test.ID;
                testTypeMapper.TestTypeID = testType.ID;
                context.TestTypeMappers.Add(testTypeMapper);

                await context.SaveChangesAsync();

                return Ok(model);
            }
            return BadRequest(ModelState);
        }

        [HttpDelete]
        [Route("DeleteTest/{id}")]
        public async Task<IActionResult> DeleteTestAsync([FromRoute] int id)
        {
            if (ModelState.IsValid)
            {
                var test = await context.Tests.FindAsync(id);
                if(test == null)
                {
                    return NotFound();
                }
                context.Tests.Remove(test);
                await context.SaveChangesAsync();

                return Ok(test);
            }
            return BadRequest(ModelState);
        }

        [HttpGet]
        [Route("GetAthletes")]
        public async Task<IActionResult> GetAthletesAsync()
        {
            var Users = await (from users in context.Users
                               join roles in context.UserRoles.Where(u => u.RoleId == "2")
                               on users.Id equals roles.UserId
                               join userroles in context.Roles
                               on roles.RoleId equals userroles.Id
                               select new
                               {
                                   ID = users.Id,
                                   Name = users.UserName,
                                   Role = userroles.Name
                               }).ToListAsync();

            return Ok(Users);
        }

        [HttpPost]
        [Route("AddAthlete/{id}")]
        public async Task<IActionResult> AddAthleteAsync([FromRoute] int id, [FromBody] AthleteAddViewModel model)
        {
            UserTestMapper UserTest = new UserTestMapper();
            var UserExist = (from user in context.UserTestMappers.Where(t => t.TestID == id)
                             select user.Users.UserName).ToList();
            var Tests = await context.Tests.FirstOrDefaultAsync(t => t.ID == id);
            var Users = context.Users.Where(u => u.UserName == model.Name);

            if (!UserExist.Contains(model.Name))
            {
                UserTest.TestID = Tests.ID;
                foreach (var user in Users)
                {
                    UserTest.UserID = user.Id;
                }
                if (model.Distance != 0)
                {
                    UserTest.CooperTestDistance = model.Distance;
                    UserTest.FitnessRating = CalculateFitness(model.Distance);
                }
                else
                {
                    UserTest.SprintTestTime = model.Time;
                }
                context.UserTestMappers.Add(UserTest);
            }
            else
            {
                var UpdateUser = context.UserTestMappers.Where(u => u.Users.UserName == model.Name).Where(u => u.TestID == id).FirstOrDefault();

                if (model.Distance != 0)
                {
                    UpdateUser.CooperTestDistance = model.Distance;
                    UpdateUser.FitnessRating = CalculateFitness(model.Distance);
                }
                else
                {
                    UpdateUser.SprintTestTime = model.Time;
                }
                context.UserTestMappers.Update(UpdateUser);
            }
            await context.SaveChangesAsync();
            return Ok(model);
        }

        [HttpGet]
        [Route("GetAthleteByTest/{testId}/{athleteId}")]
        public async Task<IActionResult> GetAthleteByTestAsync([FromRoute] int testId, [FromRoute] string athleteId)
        {
            var UserPerTest = await context.UserTestMappers.Include(u => u.Users).Where(t => t.TestID == testId).Where(t => t.UserID == athleteId).FirstOrDefaultAsync();
            return Ok(UserPerTest);
        }


        [HttpPut]
        [Route("EditAthlete/{testId}/{athleteId}")]
        public async Task<IActionResult> EditAthleteAsync([FromRoute] int testId, [FromRoute] string athleteId, [FromBody] EditAthleteViewModel model)
        {
            var UserPerTest = context.UserTestMappers.Include(u => u.Users).Where(u => u.TestID == testId).Where(u => u.UserID == athleteId).FirstOrDefault();
            UserPerTest.Users.UserName = model.Users.UserName;
            if (model.CooperTestDistance != null)
            {
                UserPerTest.CooperTestDistance = model.CooperTestDistance;
                UserPerTest.FitnessRating = CalculateFitness(model.CooperTestDistance);
            }
            else
            {
                UserPerTest.SprintTestTime = model.SprintTestTime;
            }
            context.UserTestMappers.Update(UserPerTest);
            await context.SaveChangesAsync();

            return Ok(model);
        }

        private string CalculateFitness(double? distance)
        {
            if (distance <= 1000)
            {
                return "Below Average";
            }
            else if (distance > 1000 && distance <= 2000)
            {
                return "Average";
            }
            else if (distance > 2000 && distance <= 3500)
            {
                return "Good";
            }
            else if (distance > 3500)
            {
                return "Very Good";
            }
            return " ";
        }
    }
}