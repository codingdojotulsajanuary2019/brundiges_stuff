#pragma checksum "C:\Users\Geoff\Documents\GitHub\brundiges_stuff\CSharp\Wedding\Views\Home\WeddingsAll.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "1a44e37208eac7e8366365553e04cc3db910a3e4"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Home_WeddingsAll), @"mvc.1.0.view", @"/Views/Home/WeddingsAll.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Home/WeddingsAll.cshtml", typeof(AspNetCore.Views_Home_WeddingsAll))]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#line 1 "C:\Users\Geoff\Documents\GitHub\brundiges_stuff\CSharp\Wedding\Views\_ViewImports.cshtml"
using WeddingPlanner;

#line default
#line hidden
#line 2 "C:\Users\Geoff\Documents\GitHub\brundiges_stuff\CSharp\Wedding\Views\_ViewImports.cshtml"
using WeddingPlanner.Models;

#line default
#line hidden
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"1a44e37208eac7e8366365553e04cc3db910a3e4", @"/Views/Home/WeddingsAll.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"9e9e38482b8beecdb199b7be73dfa5c3d6a2f574", @"/Views/_ViewImports.cshtml")]
    public class Views_Home_WeddingsAll : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        #line hidden
        #pragma warning disable 0169
        private string __tagHelperStringValueBuffer;
        #pragma warning restore 0169
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperExecutionContext __tagHelperExecutionContext;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner __tagHelperRunner = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner();
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __backed__tagHelperScopeManager = null;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __tagHelperScopeManager
        {
            get
            {
                if (__backed__tagHelperScopeManager == null)
                {
                    __backed__tagHelperScopeManager = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager(StartTagHelperWritingScope, EndTagHelperWritingScope);
                }
                return __backed__tagHelperScopeManager;
            }
        }
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.HeadTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_HeadTagHelper;
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.BodyTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            BeginContext(0, 37, true);
            WriteLiteral("<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\r\n");
            EndContext();
            BeginContext(37, 921, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("head", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "1de774dd43d44bc69145ee8cad8627c5", async() => {
                BeginContext(43, 908, true);
                WriteLiteral(@"
	<meta charset=""UTF-8"">
	<title>Wedding Planner</title>

	<link rel=""stylesheet"" href=""https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css""
		integrity=""sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"" crossorigin=""anonymous"">
	<!-- JS Styles -->
	<script src=""https://code.jquery.com/jquery-3.2.1.slim.min.js""
		integrity=""sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN""
		crossorigin=""anonymous""></script>
	<script src=""https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js""
		integrity=""sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q""
		crossorigin=""anonymous""></script>
	<script src=""https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js""
		integrity=""sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl""
		crossorigin=""anonymous""></script>
");
                EndContext();
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_HeadTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.HeadTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_HeadTagHelper);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(958, 4, true);
            WriteLiteral("\r\n\r\n");
            EndContext();
            BeginContext(962, 794, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("body", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "af9f1adc9cbd4cbcb3c47aa0a854f67d", async() => {
                BeginContext(968, 440, true);
                WriteLiteral(@"
	<div class=""container"">
		<div class=""row"">
			<div class=""col mb-3"">
				<h2>Wedding Planner</h2>
			</div>
		</div>
		<div class=""row"">
			<div class=""col ml-3"">
				<h3>All Weddings</h3>
				<table class=""table"">
					<thead>
						<tr>
							<th scope=""col"">Wedding</th>
							<th scope=""col"">Date</th>
							<th scope=""col"">Guests</th>
							<th scope=""col"">Action</th>
						</tr>
					</thead>
					<tbody>
");
                EndContext();
#line 42 "C:\Users\Geoff\Documents\GitHub\brundiges_stuff\CSharp\Wedding\Views\Home\WeddingsAll.cshtml"
                          foreach (Wedding wedding in Model.AllWeddings)
						{

#line default
#line hidden
                BeginContext(1473, 39, true);
                WriteLiteral("\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<th scope=\"row\"><a");
                EndContext();
                BeginWriteAttribute("href", " href=\"", 1512, "\"", 1547, 2);
                WriteAttributeValue("", 1519, "/weddings/", 1519, 10, true);
#line 45 "C:\Users\Geoff\Documents\GitHub\brundiges_stuff\CSharp\Wedding\Views\Home\WeddingsAll.cshtml"
WriteAttributeValue("", 1529, wedding.WeddingId, 1529, 18, false);

#line default
#line hidden
                EndWriteAttribute();
                BeginContext(1548, 1, true);
                WriteLiteral(">");
                EndContext();
                BeginContext(1550, 17, false);
#line 45 "C:\Users\Geoff\Documents\GitHub\brundiges_stuff\CSharp\Wedding\Views\Home\WeddingsAll.cshtml"
                                                                                  Write(wedding.WedderOne);

#line default
#line hidden
                EndContext();
                BeginContext(1567, 5, true);
                WriteLiteral(" and ");
                EndContext();
                BeginContext(1573, 17, false);
#line 45 "C:\Users\Geoff\Documents\GitHub\brundiges_stuff\CSharp\Wedding\Views\Home\WeddingsAll.cshtml"
                                                                                                         Write(wedding.WedderTwo);

#line default
#line hidden
                EndContext();
                BeginContext(1590, 23, true);
                WriteLiteral("</a></th>\r\n\t\t\t\t\t\t\t\t<td>");
                EndContext();
                BeginContext(1614, 12, false);
#line 46 "C:\Users\Geoff\Documents\GitHub\brundiges_stuff\CSharp\Wedding\Views\Home\WeddingsAll.cshtml"
                               Write(wedding.Date);

#line default
#line hidden
                EndContext();
                BeginContext(1626, 64, true);
                WriteLiteral("</td>\r\n\t\t\t\t\t\t\t\t<td>0</td>\r\n\t\t\t\t\t\t\t\t<td>RSVP</td>\r\n\t\t\t\t\t\t\t</tr>\r\n");
                EndContext();
#line 50 "C:\Users\Geoff\Documents\GitHub\brundiges_stuff\CSharp\Wedding\Views\Home\WeddingsAll.cshtml"
						}

#line default
#line hidden
                BeginContext(1700, 49, true);
                WriteLiteral("\t\t\t\t\t</tbody>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\r\n\t</div>\r\n");
                EndContext();
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.BodyTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(1756, 11, true);
            WriteLiteral("\r\n\r\n</html>");
            EndContext();
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<dynamic> Html { get; private set; }
    }
}
#pragma warning restore 1591
