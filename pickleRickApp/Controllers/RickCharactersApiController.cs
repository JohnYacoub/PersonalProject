using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using pickleRickApp.Models;
using pickleRickApp.Models.Requests;
using pickleRickApp.Services;

namespace pickleRickApp.Controllers
{
    [Route("api/characters")]
    [ApiController]
    public class RickCharactersApiController : ControllerBase
    {
        [HttpGet]
        public ActionResult<List<Character>> GetCharactar()
        {
            try
            {
                List<Character> characters = null;
                CharacterService service = new CharacterService();
                characters = service.GetAll();
                return Ok(characters);

            }
            catch (Exception ex)
            {

                return StatusCode(500, ex.Message.ToString());
            }
        }

        [HttpPost]
        public ActionResult<int> AddCharactar(CharacterAddRequest model)
        {
            try
            {
                CharacterService service = new CharacterService();
                int id = service.Add(model);
                return Ok(id);

            }
            catch (Exception ex)
            {

                return StatusCode(500, ex.Message.ToString());
            }
        }
    }
}