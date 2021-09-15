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
    public class CampaignCommentsController : ControllerBase
    {
        private readonly T2004E_ReactProjectContext _context;

        public CampaignCommentsController(T2004E_ReactProjectContext context)
        {
            _context = context;
        }

        // GET: api/CampaignComments
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CampaignComment>>> GetCampaignComments()
        {
            return await _context.CampaignComments.ToListAsync();
        }

        // GET: api/CampaignComments/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CampaignComment>> GetCampaignComment(int id)
        {
            var campaignComment = await _context.CampaignComments.FindAsync(id);

            if (campaignComment == null)
            {
                return NotFound();
            }

            return campaignComment;
        }

        // PUT: api/CampaignComments/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCampaignComment(int id, CampaignComment campaignComment)
        {
            if (id != campaignComment.Id)
            {
                return BadRequest();
            }

            _context.Entry(campaignComment).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CampaignCommentExists(id))
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

        // POST: api/CampaignComments
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<CampaignComment>> PostCampaignComment(CampaignComment campaignComment)
        {
            _context.CampaignComments.Add(campaignComment);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCampaignComment", new { id = campaignComment.Id }, campaignComment);
        }

        // DELETE: api/CampaignComments/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCampaignComment(int id)
        {
            var campaignComment = await _context.CampaignComments.FindAsync(id);
            if (campaignComment == null)
            {
                return NotFound();
            }

            _context.CampaignComments.Remove(campaignComment);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CampaignCommentExists(int id)
        {
            return _context.CampaignComments.Any(e => e.Id == id);
        }
    }
}
