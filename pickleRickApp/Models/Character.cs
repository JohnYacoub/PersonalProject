using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace pickleRickApp.Models
{
    public class Character
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Status { get; set; }
        public string Species { get; set; }
        public string Type { get; set; }
        public string Gender { get; set; }
        public string Origin { get; set; }
        public string Location { get; set; }
        public string Image { get; set; }
        public string Episode { get; set; }
        public string Url { get; set; }
        public string CreatedBy { get; set; }
        public bool IsSelected { get; set; }

    }
}
