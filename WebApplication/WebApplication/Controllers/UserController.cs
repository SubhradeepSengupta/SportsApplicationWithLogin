using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
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
        private readonly UserManager<IdentityUser> userManager;

        public UserController(ApplicationDbContext context, UserManager<IdentityUser> userManager)
        {
            this.context = context;
            this.userManager = userManager;
        }

        [HttpGet]
        [Route("GetAllUsers")]
        [Authorize(Roles = "Coach")]
        public async Task<IActionResult> GetAllUsersAsync()
        {
            if (User.Identity.IsAuthenticated)
            {
                var Users = await (from users in context.Users
                                   join roles in context.UserRoles
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
                var role = await userManager.GetRolesAsync(user);

                return Ok(new {
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
                if (user == null)
                {
                    return NotFound();
                }
                else
                {
                    user.UserName = model.Name;
                    await userManager.RemoveFromRoleAsync(user, userManager.GetRolesAsync(user).ToString());
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
            if (User.Identity.IsAuthenticated)
            {
                var user = await userManager.FindByIdAsync(id);
                if (user == null)
                {
                    return NotFound();
                }
                else
                {
                    await userManager.DeleteAsync(user);
                    return Ok(user);
                }
            }
            else
            {
                return RedirectToAction("Index", "Home");
            }
        }
    }
}