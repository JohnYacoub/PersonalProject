using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using pickleRickApp.Models;
using pickleRickApp.Models.Requests;
using pickleRickApp.Services;

namespace pickleRickApp.Controllers
{
    [Route("api/characters")]
    [ApiController]
    public class RickCharactersApiController : ControllerBase
    {
        [HttpGet("all")]
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

        [HttpPost("add")]
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


        [HttpPut("{id:int}")]
        public ActionResult<int> Update(int id, CharacterUpdateRequest model)
        {
            try
            {
                if (id == model.Id)
                {
                    CharacterService service = new CharacterService();
                    service.Update(id,model);
                    return Ok("Success");
                }
                else
                {
                    return NotFound(("Bad Request"));
                }

            }
            catch (Exception ex)
            {

                return StatusCode(500, ex.Message.ToString());
            }
        }

        [HttpGet("{id:int}")]
        public ActionResult<Character> GetById(int id)
        {
            try
            {
                if (id == 0)
                {
                    return NotFound(("Bad Request"));
                }
                else
                {
                    Character Character = null;
                    CharacterService service = new CharacterService();
                    Character = service.Get(id);
                    return Ok(Character);
                }
            }
            catch (Exception ex)
            {

                return StatusCode(500, ex.Message.ToString());
            }
        }

        [HttpDelete("{id:int}")]
        public ActionResult<int> Delete(int id)
        {
            try
            {
                CharacterService service = new CharacterService();
                service.Delete(id);
                return Ok("Success");

            }
            catch (Exception ex)
            {

                return StatusCode(500, ex.Message.ToString());
            }
        }

        [HttpGet]
        public async Task<ActionResult<int>> RunRickAndMortyAPIAsync(int page)
        {
            using (HttpClient client = new HttpClient())
            {
                CharacterService service = new CharacterService();
                string requestUri = "https://rickandmortyapi.com/api/character/?page=" + page; 
                HttpResponseMessage request = await client.GetAsync(requestUri);
                string content = await request.Content.ReadAsStringAsync();
                RootObject data = JsonConvert.DeserializeObject<RootObject>(content);
                if (data.results.Count() > 0)
                {
                    foreach (var item in data.results)
                    {
                        CharacterAddRequest character = new CharacterAddRequest();
                        character.Name = item.name;
                        character.Image = item.image;
                        character.Location = item.location.name;
                        character.Status = item.status;
                        character.Species = item.species;
                        character.Type = item.type;
                        character.Gender = item.gender;
                        character.Origin = item.origin.name;
                        //character.Episode = item.episode[0];
                        //character.Url = item.url;
                        //character.CreatedBy = "John";
                        service.Add(character);
                    }
                }


                return Ok(2);
            }
        }
    }
}