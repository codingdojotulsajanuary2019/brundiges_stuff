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

		[HttpGet]
		[Route("frog")]
		public ViewResult Frog()
		{
			System.Console.WriteLine("Rendering frog");
			int? food = HttpContext.Session.GetInt32("food");
			if (food == null)
			{
				System.Console.WriteLine("Food is null. Resetting");
				HttpContext.Session.SetInt32("food", 20);
				HttpContext.Session.SetInt32("happiness", 20);
				HttpContext.Session.SetInt32("supply", 3);
				HttpContext.Session.SetInt32("energy", 50);
				HttpContext.Session.SetString("message", "Welcome to Virtual Frog");
			}
			Dictionary<string, int> stats = new Dictionary<string, int>();
			stats.Add("food", (int)HttpContext.Session.GetInt32("food"));
			stats.Add("happiness", (int)HttpContext.Session.GetInt32("happiness"));
			stats.Add("supply", (int)HttpContext.Session.GetInt32("supply"));
			stats.Add("energy", (int)HttpContext.Session.GetInt32("energy"));


			if (food <= 0 || (int)HttpContext.Session.GetInt32("happiness") <= 0)
			{
				HttpContext.Session.SetString("message", "Froggie is ded!");
				System.Console.WriteLine("Froggie is ded!");
				ViewBag.Continue = false;
			}
			else if (food >= 100 && (int)HttpContext.Session.GetInt32("happiness") >= 100)
			{
				HttpContext.Session.SetString("message", "You win!");
				System.Console.WriteLine("You win!");
				ViewBag.Continue = false;
			}
			else
			{
				ViewBag.Continue = true;
			}

			ViewBag.Message = (string)HttpContext.Session.GetString("message");

			return View("VirtualFrog", stats);
		}

		[HttpPost]
		[Route("frog/feed")]
		public IActionResult Feed()
		{
			System.Console.WriteLine("Feeding froggie");

			int? food = HttpContext.Session.GetInt32("food");
			int? supply = HttpContext.Session.GetInt32("supply");

			if (food == null || supply == null)
			{
				HttpContext.Session.SetInt32("food", 20);
				HttpContext.Session.SetInt32("supply", 3);
				food = 20;
				supply = 3;
			}
			else if (supply >= 1)
			{
				Random random = new Random();
				int j = random.Next(2, 7) + random.Next(2, 7);
				int i = random.Next(4);
				if (i == 0)
				{
					j = 0;
				}

				HttpContext.Session.SetInt32("food", (int)food + j);
				HttpContext.Session.SetInt32("supply", (int)supply - 1);
				HttpContext.Session.SetString("message", $"You feed froggie. | Food + {j} Supply - 1");
			}
			else
			{
				HttpContext.Session.SetString("message", "You have no food!");
			}

			return RedirectToAction("Frog");
		}

		[HttpPost]
		[Route("frog/play")]
		public IActionResult Play()
		{
			System.Console.WriteLine("Playing with froggie");
			int? happiness = HttpContext.Session.GetInt32("happiness");
			int? energy = HttpContext.Session.GetInt32("energy");

			if (happiness == null || energy == null)
			{
				HttpContext.Session.SetInt32("happiness", 20);
				HttpContext.Session.SetInt32("energy", 50);
				happiness = 20;
				energy = 50;
			}
			if (energy >= 5)
			{
				Random random = new Random();
				int j = random.Next(2, 7) + random.Next(2, 7);
				int i = random.Next(4);
				if (i == 0)
				{
					j = 0;
				}

				HttpContext.Session.SetInt32("happiness", (int)happiness + j);
				HttpContext.Session.SetInt32("energy", (int)energy - 5);
				HttpContext.Session.SetString("message", $"You play with froggie. | Happiness + {j} Energy - 5");
				System.Console.WriteLine($"You play with froggie. It gains {j} happiness");
			}
			else
			{
				HttpContext.Session.SetString("message", "You lack the energy to play with froggie!");
			}

			return RedirectToAction("Frog");
		}

		[HttpPost]
		[Route("frog/work")]
		public IActionResult Work()
		{
			System.Console.WriteLine("Working");

			int? supply = HttpContext.Session.GetInt32("supply");
			int? energy = HttpContext.Session.GetInt32("energy");

			if (supply == null || energy == null)
			{
				HttpContext.Session.SetInt32("supply", 3);
				HttpContext.Session.SetInt32("energy", 50);
				supply = 3;
				energy = 50;
			}

			if (energy >= 5)
			{
				Random random = new Random();
				int j = random.Next(1, 2) + random.Next(1, 2);
				HttpContext.Session.SetInt32("supply", (int)supply + j);
				HttpContext.Session.SetInt32("energy", (int)energy - 5);
				System.Console.WriteLine($"You work gaining {j} supply");
				HttpContext.Session.SetString("message", $"You work gaining {j} supply");
			}
			else
			{
				HttpContext.Session.SetString("message", "You lack the energy to work!");
			}

			return RedirectToAction("Frog");
		}

		[HttpPost]
		[Route("frog/sleep")]
		public IActionResult Sleep()
		{
			System.Console.WriteLine("Sleeping");

			int? food = HttpContext.Session.GetInt32("food");
			int? happiness = HttpContext.Session.GetInt32("happiness");
			int? energy = HttpContext.Session.GetInt32("energy");

			if (food == null || happiness == null || energy == null)
			{
				HttpContext.Session.SetInt32("food", 20);
				food = 20;
				HttpContext.Session.SetInt32("happiness", 20);
				happiness = 20;
				HttpContext.Session.SetInt32("energy", 50);
				energy = 50;
			}
			else
			{
				HttpContext.Session.SetInt32("food", (int)food - 5);
				HttpContext.Session.SetInt32("happiness", (int)happiness - 5);
				HttpContext.Session.SetInt32("energy", (int)energy + 15);
				HttpContext.Session.SetString("message", $"You sleep | Food - 5 Happiness - 5 Energy + 15");
			}

			return RedirectToAction("Frog");
		}

		[HttpPost]
		[Route("frog/reset")]
		public IActionResult Reset()
		{
			HttpContext.Session.Clear();
			System.Console.WriteLine("Clearing");

			return RedirectToAction("Frog");
		}

		[HttpGet]
		[Route("quote")]
		public ViewResult QuoteRenderForm()
		{
			System.Console.WriteLine("\nRendering quote submission page");
			return View("QuoteSubmit");
		}

		[HttpGet]
		[Route("quote/all")]
		public ViewResult QuoteRenderAll()
		{
			System.Console.WriteLine("\nRendering all quotes!");
			List<Dictionary<string, object>> AllQuotes = DbConnector.Query("SELECT * FROM users ORDER BY CreatedAt DESC");
			return View("QuoteAll", AllQuotes);
		}

		[HttpPost]
		[Route("quote/new")]
		public IActionResult QuoteNew(Submission Submission)
		{
			System.Console.WriteLine("Name: " + Submission.Name);
			System.Console.WriteLine("Quote: " + Submission.Quote);
			System.Console.WriteLine("\nBig Chungus");
			if (ModelState.IsValid)
			{

				string query = $"INSERT INTO users (Name, Quote, CreatedAt, UpdatedAt) VALUES ('{Submission.Name}', '{Submission.Quote}', Now(), Now())";
				System.Console.WriteLine();
				System.Console.WriteLine(query);
				DbConnector.Execute(query);
			}
			else
			{
				System.Console.WriteLine("Invalid data!");
				return RedirectToAction("QuoteRenderForm");
			}
			return RedirectToAction("QuoteRenderAll");
		}
	}
}
