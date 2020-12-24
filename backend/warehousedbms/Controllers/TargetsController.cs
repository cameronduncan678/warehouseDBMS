using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using warehousedbms.Data;
using warehousedbms.Models;

namespace warehousedbms.Controllers
{
    [EnableCors("MyPolicy")]
    [Route("targets")]
    public class TargetsController: ControllerBase
    {
        
        private readonly DataContext _dbContext;
        
        public TargetsController(DataContext dataContext)
        {
            _dbContext = dataContext;
        }

        [HttpPut("{locationId}")]
        public async Task<IActionResult> NewTargets(string locationId, [FromBody] RawTargets _targets)
        {
            Targets _data = _dbContext.Targets.Single(d => d.locationId == locationId);

            if (_data != null)
            {
                foreach (var dat in _dbContext.Targets)
                {
                    if (dat.locationId == locationId)
                    {
                        dat.income = _targets.income;
                        dat.perc = _targets.perc;
                        dat.slots = _targets.slots;
                        dat.spaces = _targets.spaces;
                    }
                }

                await _dbContext.SaveChangesAsync();
                return Ok();
            }

            return NotFound();
        }
    }
}