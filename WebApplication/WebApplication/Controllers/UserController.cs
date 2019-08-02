using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication.Models;
using WebApplication.ViewModel;

namespace WebApplication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class UserController : ControllerBase
    {
        private readonly ApplicationDbContext context;
        private readonly UserManager<ApplicationUser> userManager;
        private readonly SignInManager<ApplicationUser> signInManager;

        public UserController(ApplicationDbContext context, UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager)
        {
            this.context = context;
            this.userManager = userManager;
            this.signInManager = signInManager;
        }

        [HttpGet]
        [Route("GetUser")]
        public async Task<IActionResult> GetUserAsync()
        {
            var LoggedInUser = await userManager.FindByNameAsync(User.Identity.Name);
            var UserId = await context.Users.Where(u => u.UserName.Equals(LoggedInUser.ToString())).Select(u => u.Id).FirstOrDefaultAsync();
            var Role = (await userManager.GetRolesAsync(LoggedInUser)).FirstOrDefault();

            if(Role.Equals("Coach"))
            {
                return RedirectToAction("GetAllUsersAsync", "User");
            }
            else
            {
                var Users = await (from users in userManager.Users.Where(u => u.UserName.Equals(LoggedInUser.ToString()))
                                   join roles in context.UserRoles
                                   on users.Id equals roles.UserId
                                   join userroles in context.Roles
                                   on roles.RoleId equals userroles.Id
                                   select new
                                   {
                                       ID = users.Id,
                                       Name = users.FullName,
                                       Role = userroles.Name
                                   }).ToListAsync();

                var UserTest = await context.UserTestMappers.Include(u => u.Users).Where(u => u.UserID == UserId).ToListAsync();
                var isCoach = false;

                return Ok( new { Users, UserTest, isCoach } );
            }
        }

        [HttpGet]
        [Route("GetAllUsers")]
        [Authorize(Roles = "Coach")]
        public async Task<IActionResult> GetAllUsersAsync()
        {
            if (User.Identity.IsAuthenticated)
            {
                var LoggedInUser = await userManager.FindByNameAsync(User.Identity.Name);
                var UserId = await context.Users.Where(u => u.UserName.Equals(LoggedInUser.ToString())).Select(u => u.Id).FirstOrDefaultAsync();
                var Role = (await userManager.GetRolesAsync(LoggedInUser)).FirstOrDefault();

                var Users = await (from users in userManager.Users
                                   join roles in context.UserRoles
                                   on users.Id equals roles.UserId
                                   join userroles in context.Roles
                                   on roles.RoleId equals userroles.Id
                                   select new
                                   {
                                       ID = users.Id,
                                       Name = users.FullName,
                                       Role = userroles.Name
                                   }).ToListAsync();

                var UserTest = await context.UserTestMappers.Include(u => u.Users).Where(u => u.UserID == UserId).ToListAsync();
                var isCoach = true;

                return Ok(new { Users, UserTest, isCoach } );
            }
            else
            {
                return RedirectToAction("Index", "Home");
            }

        }

        [HttpGet]
        [Route("GetUser/{id}")]
        [Authorize(Roles = "Coach,Athlete")]
        public async Task<IActionResult> GetUserAsync([FromRoute] string id)
        {
            if (User.Identity.IsAuthenticated)
            {
                var user = await userManager.FindByIdAsync(id);
                var role = (await userManager.GetRolesAsync(user)).FirstOrDefault();

                return Ok(new
                {
                    ID = user.Id,
                    Name = user.UserName,
                    Role = role
                }); ;
            }
            else
            {
                return RedirectToAction("Index", "Home");
            }
        }

        [HttpPut]
        [Route("EditUser/{id}")]
        [Authorize(Roles = "Coach")]
        public async Task<IActionResult> EditUserAsync([FromRoute] string id, UserEditViewModel model)
        {
            if (User.Identity.IsAuthenticated)
            {
                var user = await userManager.FindByIdAsync(id);
                var UserRole = (await userManager.GetRolesAsync(user)).FirstOrDefault();
                if (user == null && UserRole == null)
                {
                    return NotFound();
                }
                else
                {
                    await userManager.RemoveFromRoleAsync(user, UserRole.ToString());
                    user.UserName = model.Name;
                    await userManager.AddToRoleAsync(user, model.Role);

                    return Ok(model);
                }
            }
            else
            {
                return RedirectToAction("Index", "Home");
            }
        }

        [HttpDelete]
        [Route("DeleteUser/{id}")]
        [Authorize(Roles = "Coach,Athlete")]
        public async Task<IActionResult> DeleteUserAsync([FromRoute] string id)
        {
            var user = await context.Users.FindAsync(id);
            var userTestMapper = await context.UserTestMappers.Where(t => t.Users.UserName == user.UserName).FirstOrDefaultAsync();
            var isCoach = false;
            if (user == null)
            {
                return NotFound();
            }
            else
            {
                if (userTestMapper != null)
                {
                    context.UserTestMappers.Remove(userTestMapper);
                    context.Users.Remove(user);
                    await context.SaveChangesAsync();
                }
                else
                {
                    if(user.UserName == User.Identity.Name)
                    {
                        context.Users.Remove(user);
                        await context.SaveChangesAsync();
                        await signInManager.SignOutAsync();
                        isCoach = true;
                    }
                    else
                    {
                        context.Users.Remove(user);
                        await context.SaveChangesAsync();
                    }
                }
                return Ok(new { user, isCoach });
            }
        }
    }
}