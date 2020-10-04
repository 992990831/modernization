using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Model = dotnet_core_service.Model;

namespace dotnet_core_service.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TaskController : ControllerBase
    {
        [HttpGet]
        [Route("all")]
        public IEnumerable<Model.Task> GetAll()
        {
            var tasks = new List<Model.Task>();
            for(int i=1; i<10; i++)
            {
                tasks.Add(new Model.Task(){ id=i.ToString(), description=$"description for {i}", title=$"title for {i}",  completed=true});
            }

            return tasks;
        }
    }
}
