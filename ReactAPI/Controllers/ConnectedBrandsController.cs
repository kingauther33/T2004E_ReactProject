using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ReactAPI.Models;

namespace ReactAPI.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ConnectedBrandsController : ControllerBase
    {
        private readonly T2004E_ReactProjectContext _context;

        public ConnectedBrandsController(T2004E_ReactProjectContext context)
        {
            _context = context;
        }

        // GET: api/ConnectedBrands
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ConnectedBrand>>> GetConnectedBrands()
        {
            return await _context.ConnectedBrands.ToListAsync();
        }

        // GET: api/ConnectedBrands/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ConnectedBrand>> GetConnectedBrand(int id)
        {
            var connectedBrand = await _context.ConnectedBrands.FindAsync(id);

            if (connectedBrand == null)
            {
                return NotFound();
            }

            return connectedBrand;
        }

        // PUT: api/ConnectedBrands/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutConnectedBrand(int id, ConnectedBrand connectedBrand)
        {
            if (id != connectedBrand.Id)
            {
                return BadRequest();
            }

            _context.Entry(connectedBrand).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ConnectedBrandExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ConnectedBrands
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ConnectedBrand>> PostConnectedBrand(ConnectedBrand connectedBrand)
        {
            _context.ConnectedBrands.Add(connectedBrand);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetConnectedBrand", new { id = connectedBrand.Id }, connectedBrand);
        }

        // DELETE: api/ConnectedBrands/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteConnectedBrand(int id)
        {
            var connectedBrand = await _context.ConnectedBrands.FindAsync(id);
            if (connectedBrand == null)
            {
                return NotFound();
            }

            _context.ConnectedBrands.Remove(connectedBrand);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ConnectedBrandExists(int id)
        {
            return _context.ConnectedBrands.Any(e => e.Id == id);
        }
    }
}
