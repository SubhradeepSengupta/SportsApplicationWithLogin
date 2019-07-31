using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication.Models
{
    public class UserTestMapper
    {
        [Key]
        public int ID { get; set; }
        public string UserID { get; set; }
        public int TestID { get; set; }
        public double? CooperTestDistance { get; set; }
        public int? SprintTestTime { get; set; }
        public string FitnessRating { get; set; }

        [ForeignKey("UserID")]
        public virtual IdentityUser Users { get; set; }

        [ForeignKey("TestID")]
        [NotMapped]
        public virtual Test Test { get; set; }
    }
}
