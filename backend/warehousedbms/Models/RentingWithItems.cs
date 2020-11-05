using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace warehousedbms.Models
{
    public class RentingWithItems
    {
        public string orderId { get; set; }
        public string client { get; set; }
        public string itemsId { get; set; }
        public int itemQuantity { get; set; }
        public int spaces { get; set; }
        public int slots { get; set; }
        public int pricePerWeek { get; set; }
        public string LeaseEnd { get; set; }
        public string status { get; set; }
        public string location { get; set; }
        public List<Items> items { get; set; }
    }
}
