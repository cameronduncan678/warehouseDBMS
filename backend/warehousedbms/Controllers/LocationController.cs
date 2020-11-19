using System.Collections;
using System.Collections.Generic;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using warehousedbms.Data;
using System.Linq;
using warehousedbms.Models;
using warehousedbms.Services;

namespace warehousedbms.Controllers
{
    [EnableCors("MyPolicy")]
    [Route("location")]
    public class LocationController: ControllerBase
    {
        private readonly DataContext _dbContext;

        public LocationController(DataContext dataContext)
        {
            _dbContext = dataContext;
        }
        
        [HttpGet("")]
        public IEnumerable GetLocations()
        {
            var locations = _dbContext.Location.ToList();
            var targets = _dbContext.Targets.ToList();

            List<LocationWithTargets> locationWithTargets = new List<LocationWithTargets>();
            
            var projection = new ProjectionService(_dbContext);

            foreach (Location loc in locations)
            {
                locationWithTargets.Add(new LocationWithTargets()
                {
                    locationId = loc.locationId,
                    location = loc.location,
                    totalSpaces = loc.totalSpaces,
                    totalSlots = loc.totalSlots,
                    usedSlots = loc.usedSlots,
                    availableSpaces = loc.availableSpaces,
                    availableSlots = loc.availableSlots,
                    incomePerWeek = loc.incomePerWeek,
                    projection = projection.projectionGenerator(loc.location),
                    targets = (from target in targets where target.locationId == loc.locationId select target).First()
                });
            }

            return locationWithTargets;
        }
    }
}