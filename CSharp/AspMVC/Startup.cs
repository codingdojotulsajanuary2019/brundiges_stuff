using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;

namespace AspMvc
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
						services.AddSession();
            services.AddMvc();
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseStaticFiles();
						app.UseSession();
            app.UseMvc();
        }
        public Startup(IHostingEnvironment env)
        {
            // System.Console.WriteLine("Big chungus");
            // Console.WriteLine(env.ContentRootPath);
            // Console.WriteLine(env.IsDevelopment());
        }
    }
}
