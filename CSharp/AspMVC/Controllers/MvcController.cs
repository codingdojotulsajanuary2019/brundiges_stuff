using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Globalization;
using System.Collections.Generic;
using AspMvc.Models;


namespace AspMvc.Controllers
{
	public class MvcController : Controller
	{

		[HttpGet]
		[Route("user")]
		public ViewResult Index()
		{
			User someUser = new User()
			{
				FirstName = "Real",
				LastName = "Namenstein"
			};

			return View("User", someUser);
		}

		[HttpGet]
		[Route("numbers")]
		public ViewResult Numbers()
		{
			int[] numbers = new int[]
			{ 2,4,8,16,32,64,128,256 };

			return View("Numbers", numbers);
		}

		[HttpGet]
		[Route("")]
		public ViewResult Message()
		{

			string aMessage = "new Message()";

			return View("Index", aMessage);
		}

		[HttpGet]
		[Route("users")]
		public ViewResult Users()
		{
			List<User> niceUsers = new List<User>();

			User someUser = new User()
			{
				FirstName = "Real",
				LastName = "Namenstein"
			};
			niceUsers.Add(someUser);
			someUser = new User()
			{
				FirstName = "Cool",
				LastName = "Dude"
			};
			niceUsers.Add(someUser);

			return View("Users", niceUsers);
		}

	}
}
