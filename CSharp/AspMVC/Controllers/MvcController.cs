using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Globalization;
using System;

namespace AspMvc.Controllers
{
	public class MvcController : Controller
	{
		//for each route this controller is to handle:
		[HttpGet]       //type of request
		[Route("")]     //associated route string (exclude the leading /)
		public ViewResult Index()
		{
			return View("Index");
		}
	}
}
