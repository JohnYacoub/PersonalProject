using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace pickleRickApp.Models.Requests
{
    public class CharacterUpdateRequest :CharacterAddRequest
    {
        public int Id { get; set; }
    }
}
