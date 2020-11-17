using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using warehousedbms.Data;
using warehousedbms.Models;

namespace warehousedbms.Controllers
{
    [EnableCors("MyPolicy")]
    [Route("renting")]
    public class RentingController : ControllerBase
    {
        private readonly DataContext _dataContext;

        public RentingController(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        [HttpGet("")]
        public IEnumerable GetRenting()
        {
            var renting = _dataContext.Renting.ToList();
            var items = _dataContext.Items.ToList();

            List<RentingWithItems> procesedData = new List<RentingWithItems>();

            foreach(Renting item in renting)
            {
                RentingWithItems data = new RentingWithItems();

                IEnumerable<Items> query = items.Where(dat => dat.itemsId == item.itemsId);

                data.orderId = item.orderId;
                data.client = item.client;
                data.itemsId = item.itemsId;
                data.itemQuantity = item.itemQuantity;
                data.spaces = item.spaces;
                data.slots = item.slots;
                data.pricePerWeek = item.pricePerWeek;
                data.LeaseEnd = item.LeaseEnd;
                data.status = item.status;
                data.location = item.location;
                data.items = query.ToList();

                procesedData.Add(data);
            }

            return procesedData;
        }
    }
}
