using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace dotnet_core_service.Model
{
    public class Order
    {
        public int id { get; set; }

        public string note { get; set; }
    }
}
