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
using Unified;

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

            foreach(Renting rent in renting)
            {
                RentingWithItems data = new RentingWithItems();
                
                List<Items> _items = RentingUtils.GetItems(items, rent.itemsId);

                int[] _slots_spaces = RentingUtils.GetSpacesSlots(_items);

                data.orderId = rent.orderId;
                data.client = rent.client;
                data.itemsId = rent.itemsId;
                data.itemQuantity = RentingUtils.GetItemQuantity(_items);
                data.spaces = _slots_spaces[0];
                data.slots = _slots_spaces[1];
                data.pricePerWeek = RentingUtils.GetPricePerWeek(_slots_spaces[0], _slots_spaces[1]);
                data.LeaseEnd = rent.LeaseEnd;
                data.status = RentingUtils.GetStatus(rent.LeaseEnd, rent.status);
                data.location = rent.location;
                data.items = _items;

                procesedData.Add(data);
            }

            return procesedData;
        }

        [HttpGet("{id}")]
        public RentingWithItems GetRentingById(string id)
        {
            RentingWithItems query = new RentingWithItems();
            
            Renting renting = _dataContext.Renting.ToList().Single(r => r.orderId == id);
            int[] _slots_spaces;
            
            if (renting != null)
            {
                var _items = _dataContext.Items.Where(i => i.itemsId == renting.itemsId).ToList();
                _slots_spaces = RentingUtils.GetSpacesSlots(_items);

                query.orderId = renting.orderId;
                query.client = renting.client;
                query.itemsId = renting.itemsId;
                query.itemQuantity = RentingUtils.GetItemQuantity(_items);
                query.spaces = _slots_spaces[0];
                query.slots = _slots_spaces[1];
                query.pricePerWeek = RentingUtils.GetPricePerWeek(_slots_spaces[0], _slots_spaces[1]);
                query.LeaseEnd = renting.LeaseEnd;
                query.status = RentingUtils.GetStatus(renting.LeaseEnd, renting.status);
                query.location = renting.location;
                query.items = _items;
            }

            return query;

        }

        [HttpPost()]
        public async Task<IActionResult> PostRenting([FromBody]RawRenting Data)
        {
            string rentingId = UnifiedId.NewId();
            string itemId = UnifiedId.NewId();
            
            Renting renting = new Renting()
            {
                orderId = rentingId,
                client = Data.client,
                itemsId = itemId,
                itemQuantity = Data.itemQuantity,
                spaces = Data.spaces,
                slots = Data.slots,
                pricePerWeek = Data.pricePerWeek,
                LeaseEnd = Data.LeaseEnd,
                status = Data.status,
                location = Data.location
            };
            
            List<Items> items = new List<Items>();

            foreach (RawItems item in Data.items)
            {
                items.Add(new Items()
                {
                    itemsId = itemId,
                    itemName = item.itemName,
                    itemQuantity = item.amount,
                    location = Data.location
                });
            }

            await _dataContext.Renting.AddAsync(renting);
            foreach (Items item in items)
            {
                await _dataContext.Items.AddAsync(item);
            }
            await _dataContext.SaveChangesAsync();
            
            return Ok();
        }
    }
}
