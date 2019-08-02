using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication.ViewModel
{
    public class EditAthleteViewModel
    {
        public String Name { get; set; }
        public int? SprintTestTime { get; set; }
        public double? CooperTestDistance { get; set; }
        public string FitnessRating { get; set; }
        public IdentityUser Users { get; set; }
    }
}
