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
			return View("Register");
		}

		[HttpPost]
		[Route("form")]
		public IActionResult RegistrationSubmit(User user)
		{
			// System.Console.WriteLine("Big chungus");
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
				return View("Register");
			}
		}

		[HttpGet]
		[Route("home")]
		public ViewResult Home()
		{
			return View("Success");
		}

		[HttpGet]
		[Route("survey")]
		public ViewResult Survey()
		{
			return View("Survey");
		}

		[HttpPost]
		[Route("survey")]
		public IActionResult SurveySubmit(Survey survey)
		{
			System.Console.WriteLine("Big chungus");
			if (ModelState.IsValid)
			{
				System.Console.WriteLine("Formbly submitted!");
				System.Console.WriteLine("Name: " + survey.Name);
				System.Console.WriteLine("Language: " + survey.Language);
				System.Console.WriteLine("Location: " + survey.Location);
				System.Console.WriteLine("Comment: " + survey.Comment);
				System.Console.WriteLine("Redirecting");
				return View("Results", survey);
			}
			else
			{
				System.Console.WriteLine("\nErrant input! Returning to registration");
				return View("survey");
			}
		}

		[HttpGet]
		[Route("counter")]
		public ViewResult Counter()
		{
			int? c = HttpContext.Session.GetInt32("Counter");
			if (c == null)
			{
				HttpContext.Session.SetInt32("Counter", 1);
				ViewBag.Count = 1;
			}
			else
			{
				HttpContext.Session.SetInt32("Counter", (int)c + 1);
				ViewBag.Count = (int)c + 1;
			}

			char[] chars = { 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' };

			string word = "";
			for (int i = 0; i < 12; i++)
			{
				Random random = new Random();
				int j = random.Next(chars.Length);
				word += chars[j];
			}
			ViewBag.Word = word;

			return View("Counter");
		}



	}
}
