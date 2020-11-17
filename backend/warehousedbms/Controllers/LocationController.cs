using System.Collections;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using warehousedbms.Data;

namespace warehousedbms.Controllers
{
    public class LocationController: ControllerBase
    {
        private readonly DataContext _dbContext;

        public LocationController(DataContext dataContext)
        {
            _dbContext = dataContext;
        }

        [EnableCors("MyPolicy")]
        [HttpGet("")]
        public IEnumerable GetLocations()
        {
            IEnumerable locations = _dbContext.Locations;
            IEnumerable targets = _dbContext.Targets;

            return locations;
        }
    }
}