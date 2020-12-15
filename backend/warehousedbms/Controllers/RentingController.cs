using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using warehousedbms.Data;
using warehousedbms.Models;
using warehousedbms.Utils;

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
                
                List<Items> _items = RentingUtils.GetItems(items, item.itemsId);

                int[] _slots_spaces = RentingUtils.GetSpacesSlots(_items);

                data.orderId = item.orderId;
                data.client = item.client;
                data.itemsId = item.itemsId;
                data.itemQuantity = item.itemQuantity;
                data.spaces = _slots_spaces[0];
                data.slots = _slots_spaces[1];
                data.pricePerWeek = RentingUtils.GetPricePerWeek(_slots_spaces[0], _slots_spaces[1]);
                data.LeaseEnd = item.LeaseEnd;
                data.status = RentingUtils.GetStatus(item.LeaseEnd, item.status);
                data.location = item.location;
                data.items = _items;

                procesedData.Add(data);
            }

            return procesedData;
        }
    }
}
