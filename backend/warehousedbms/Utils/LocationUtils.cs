using System.Collections;
using System.Collections.Generic;
using System.Linq;
using warehousedbms.Models;

namespace warehousedbms.Utils
{
    public class LocationUtils
    {
        public static int GetSpaces(List<Items> _itemes, string location)
        {
            IEnumerable locationSpecific = _itemes.Where(i => i.location == location);

            int spacesUsed = 0;
            foreach (Items item in locationSpecific)
            {
                spacesUsed += item.itemQuantity;
            }

            return spacesUsed;
        }

        public static int GetIncome(int spaces)
        {
            return ((spaces / 5) * 500) + (spaces * 200);
        }

        public static Targets LocationTarget(List<Targets> _targets, string locationId)
        {
            try
            {
                Targets target = _targets.Single(t => t.locationId == locationId);
                return target;
            }
            catch
            {
                return new Targets()
                {
                    id = 0,
                    locationId = "id: null",
                    perc = 0,
                    slots = 0,
                    spaces = 0,
                    income = 0
                };
            }
        }
    }
}