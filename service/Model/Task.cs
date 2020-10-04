using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace dotnet_core_service.Model
{
    public class Task
    {
        public string id { get; set; }

        public string title { get; set; }

        public string description { get; set; }

        public bool completed { get; set; }
    }
}
