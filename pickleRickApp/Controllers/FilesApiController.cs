using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using pickleRickApp.Models.AppSettings;
using pickleRickApp.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace pickleRickApp.Controllers
{
    [Route("api/files")]
    [ApiController]
    public class FilesApiController : ControllerBase
    {
        //private IFileService _fileService = null;

        //public FilesApiController(IFileService fileService)  // i've removed Createdby Int as i don't have it in my database
        //{
        //    _fileService = fileService;
        //}

        [HttpPost("upload")]
        public async Task<ActionResult<ActionResult<List<string>>>> AddFile(IFormFile[] files)
        {

            try
            {
                List<string> urls = null;
                if (files[0] == null)
                {
                    return NotFound(("Bad Request"));
                }
                else
                {

                    foreach (var item in files)
                    {
                        if (urls == null)
                        {
                            urls = new List<string>();
                        }
                        FileService service = new FileService();
                        string url = await service.UploadFile(item);
                        urls.Add(url);
                    }
                    return Ok(urls);
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message.ToString());
            }

        }


    }
}
