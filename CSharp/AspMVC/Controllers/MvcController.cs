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

		[HttpGet]
		[Route("form")]
		public ViewResult Form()
		{
			return View("Survey");
		}

		[HttpPost]
		[Route("form")]
		public IActionResult SurveySubmit(User user)
		{
			System.Console.WriteLine("Big chungus");
			if (ModelState.IsValid)
			{
				System.Console.WriteLine("Formbly submitted!");
				System.Console.WriteLine(user.FirstName);
				System.Console.WriteLine(user.LastName);
				System.Console.WriteLine(user.Email);
				System.Console.WriteLine(user.Age);
				System.Console.WriteLine(user.Password);
				return RedirectToAction("Home");
			}
			else
			{
				System.Console.WriteLine("\nErrant input! Returning to registration");
				return View("Survey");
			}
		}

		[HttpGet]
		[Route("home")]
		public ViewResult Home()
		{
			return View("Success");
		}

	}
}
