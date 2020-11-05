using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace warehousedbms.Models
{
    public class Renting
    {
        public int id { get; set; }
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
    }
}
