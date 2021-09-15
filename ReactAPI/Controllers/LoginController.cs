using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using ReactAPI.Models;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System;
using System.Text;

namespace ReactAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        public IConfiguration _configuration;
        private readonly T2004E_ReactProjectContext _context;
        public LoginController(IConfiguration configuration, T2004E_ReactProjectContext context)
        {
            _configuration = configuration;
            _context = context;
        }

        [HttpPost]
        public async Task<ActionResult> Login(User _userData)
        {
            if (_userData != null
                && _userData.Email != null
                && _userData.Password != null)
            {
                // Kiem tra User va tra ve token neu login thanh cong
                var user = await _context.Users.FirstOrDefaultAsync
                    (user => user.Email == _userData.Email
                    && user.Password == _userData.Password);
                if (user != null)
                {
                    // Tim thay user thi sinh ra token de tra ve
                    var claims = new[] {
                        new Claim(JwtRegisteredClaimNames.Sub, _configuration["Jwt:Subject"]),
                        new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                        new Claim(JwtRegisteredClaimNames.Iat, DateTime.Now.ToString()),
                        new Claim("Id", user.Email),
                        new Claim("FullName", user.FullName),
                    };

                    var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
                    var sign = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
                    var token = new JwtSecurityToken(_configuration["Jwt:Issuer"],
                        _configuration["Jwt:Audience"], claims, expires: DateTime.UtcNow.AddDays(1), signingCredentials: sign);

                    // Return Token
                    return Ok(new JwtSecurityTokenHandler().WriteToken(token));
                }

                return BadRequest("User not Valid!");
            }

            return BadRequest("User not Valid!");
        }


    }
}