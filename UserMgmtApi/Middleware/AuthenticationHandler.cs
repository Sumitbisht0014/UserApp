namespace UserMgmtApi.Middleware
{
    public class AuthenticationHandler : IMiddleware
    {
        private readonly string _apiKey;

        public AuthenticationHandler(string apiKey)
        {
            _apiKey = apiKey;
        }

        public async Task InvokeAsync(HttpContext context, RequestDelegate next)
        {
            if (!context.Request.Headers.TryGetValue("ApiKey", out var apiKey))
            {
                context.Response.StatusCode = 401;
                await context.Response.WriteAsync("API key required");
                return;
            }

            if (apiKey != _apiKey)
            {
                context.Response.StatusCode = 401;
                await context.Response.WriteAsync("Invalid API key");
                return;
            }

            await next(context);
        }
    }
}
