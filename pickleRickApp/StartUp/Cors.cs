using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Cors.Internal;
using Microsoft.Extensions.DependencyInjection;


namespace pickleRickApp.StartUp
{
    public class Cors
    {
        public static void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy("AllowAllCors", builder =>
                {
                    builder

                    //.WithOrigins()
                    .AllowAnyHeader()
                    .AllowAnyMethod()
                    .AllowCredentials()
                    .SetIsOriginAllowedToAllowWildcardSubdomains()
                    .SetIsOriginAllowed(delegate (string requestingOrigin)
                    {
                        return true;
                    }).Build();
                });
            });

            var optison = new MvcOptions();

            services.Configure<MvcOptions>(options =>
            {
                options.Filters.Add(new CorsAuthorizationFilterFactory("AllowAllCors"));
            });
        }

        public static void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            app.UseCors("AllowAllCors");
        }
    }
}
