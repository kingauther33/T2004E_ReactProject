using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ReactAPI.Models;

namespace ReactAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventCommentsController : ControllerBase
    {
        private readonly T2004E_ReactProjectContext _context;

        public EventCommentsController(T2004E_ReactProjectContext context)
        {
            _context = context;
        }

        // GET: api/EventComments
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EventComment>>> GetEventComments()
        {
            return await _context.EventComments.ToListAsync();
        }

        // GET: api/EventComments/5
        [HttpGet("{id}")]
        public async Task<ActionResult<EventComment>> GetEventComment(int id)
        {
            var eventComment = await _context.EventComments.FindAsync(id);

            if (eventComment == null)
            {
                return NotFound();
            }

            return eventComment;
        }

        // PUT: api/EventComments/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEventComment(int id, EventComment eventComment)
        {
            if (id != eventComment.Id)
            {
                return BadRequest();
            }

            _context.Entry(eventComment).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EventCommentExists(id))
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

        // POST: api/EventComments
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<EventComment>> PostEventComment(EventComment eventComment)
        {
            _context.EventComments.Add(eventComment);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEventComment", new { id = eventComment.Id }, eventComment);
        }

        // DELETE: api/EventComments/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEventComment(int id)
        {
            var eventComment = await _context.EventComments.FindAsync(id);
            if (eventComment == null)
            {
                return NotFound();
            }

            _context.EventComments.Remove(eventComment);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool EventCommentExists(int id)
        {
            return _context.EventComments.Any(e => e.Id == id);
        }
    }
}
