using Azure.Core;
using Microsoft.AspNetCore.Authentication;
using Microsoft.Extensions.Options;
using System.Security.Claims;
using System.Text.Encodings.Web;

namespace UserMgmtApi.Middleware
{
    public class ApiKeyAuthenticationHandler : AuthenticationHandler<AuthenticationSchemeOptions>
    {
        private readonly string _apiKeyHeaderName;
        private readonly string[] _apiKeys;

        public ApiKeyAuthenticationHandler(IOptionsMonitor<AuthenticationSchemeOptions> options, ILoggerFactory logger, UrlEncoder encoder, ISystemClock clock, IConfiguration configuration)
            : base(options, logger, encoder, clock)
        {
            _apiKeyHeaderName = configuration.GetValue<string>("ApiKeyHeaderName");
            _apiKeys = configuration.GetValue<string>("ApiKeys").Split(',');
        }

        protected override Task<AuthenticateResult> HandleAuthenticateAsync()
        {
            if (!Request.Headers.TryGetValue(_apiKeyHeaderName, out var apiKeyHeaderValues))
            {
                return Task.FromResult(AuthenticateResult.NoResult());
            }

            var apiKey = apiKeyHeaderValues.FirstOrDefault();
            if (string.IsNullOrEmpty(apiKey) || !_apiKeys.Contains(apiKey))
            {
                return Task.FromResult(AuthenticateResult.Fail("Invalid API key"));
            }

            var identity = new ClaimsIdentity(new[] { new Claim(ClaimTypes.Name, apiKey) }, Scheme.Name);
            var principal = new ClaimsPrincipal(identity);
            var ticket = new AuthenticationTicket(principal, Scheme.Name);
            return Task.FromResult(AuthenticateResult.Success(ticket));
        }
    }

}
