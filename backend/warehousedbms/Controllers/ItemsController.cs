using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using warehousedbms.Data;

namespace warehousedbms.Controllers
{
    
    [Route("items")]
    public class ItemsController : Controller
    {
        private readonly DataContext _dataContext;

        public ItemsController(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        [HttpGet]
        public IActionResult GetItems()
        {
            var items = _dataContext.Items.ToList();
            return Json(items);
        }
    }
}
