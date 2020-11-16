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
    public class OrderController : ControllerBase
    {
        [HttpGet]
        [Route("")]
        public IEnumerable<Model.Order> GetAll()
        {
            var orders = new List<Model.Order>();
            for(int i=1; i<10; i++)
            {
                orders.Add(new Model.Order(){ id=i, note=$"order number {i}"});
            }

            return orders;
        }
    }
}
