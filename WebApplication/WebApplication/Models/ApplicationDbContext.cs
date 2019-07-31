using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication.Models
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }
        public DbSet<Test> Tests { get; set; }
        public DbSet<TestType> TestTypes { get; set; }
        public DbSet<TestTypeMapper> TestTypeMappers { get; set; }
        public DbSet<UserTestMapper> UserTestMappers { get; set; }
    }
}
