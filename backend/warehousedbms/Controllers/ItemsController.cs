using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using warehousedbms.Data;
using warehousedbms.Models;
using Unified;

namespace warehousedbms.Controllers
{
    [EnableCors("MyPolicy")]
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

        [HttpPost]
        public async Task<IActionResult> PostItem([FromBody] RawItem _item)
        {
            //string itemId = UnifiedId.NewId();
            
            Items NewItem = new Items()
            {
                itemsId = _item.itemsId,
                itemName = _item.itemName,
                itemQuantity = _item.itemQuantity,
                location = _item.location
            };

            await _dataContext.Items.AddAsync(NewItem);
            await _dataContext.SaveChangesAsync();
            
            return Ok();
        }
    }
}
