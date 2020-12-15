using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace warehousedbms.Models
{
    public class Items
    {
        public int id { get; set; }
        public string itemsId { get; set; }
        public string itemName { get; set; }
        public int itemQuantity { get; set; }
        public string location { get; set; }
    }
}
