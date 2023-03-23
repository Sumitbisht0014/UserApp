using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UserMgmtApi.Models;

namespace UserMgmtApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize(AuthenticationSchemes = "ApiKeyScheme")]
    public class UserMgmtController : Controller
    {
        private readonly AppDbContext _dbContext;

        public UserMgmtController(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        public IActionResult Get()
        {
            List<UserDetail> users = _dbContext.UserDetails.ToList();
            return Ok(users);
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<UserDetail>> Get(long id)
        {
            var user = await _dbContext.UserDetails.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        [HttpPost]
        public async Task<ActionResult<UserDetail>> Post(UserDetail product)
        {
            _dbContext.UserDetails.Add(product);
            await _dbContext.SaveChangesAsync();

            return CreatedAtAction(nameof(Get), new { id = product.Id }, product);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(long id, UserDetail product)
        {
            if (id != product.Id)
            {
                return BadRequest();
            }

            _dbContext.Entry(product).State = EntityState.Modified;

            try
            {
                await _dbContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_dbContext.UserDetails.Any(e => e.Id == id))
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

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(long id)
        {
            var product = await _dbContext.UserDetails.FindAsync(id);
            if (product == null)
            {
                return NotFound();
            }

            _dbContext.UserDetails.Remove(product);
            await _dbContext.SaveChangesAsync();

            return NoContent();
        }

    }
}
