using Microsoft.AspNetCore.Http;	
using Microsoft.AspNetCore.Mvc;	
using Microsoft.AspNetCore.Identity;	
using Microsoft.EntityFrameworkCore;	
using System;	
using System.Collections.Generic;	
using System.Diagnostics;	
using System.Linq;	
using System.Threading.Tasks;	

using WeddingPlanner.Models;

namespace WeddingPlanner.Controllers
{
	public class HomeController : Controller
	{

		private MyContext _context;

		public HomeController(MyContext context)
		{
			_context = context;
		}

		[Route("")]
		[HttpGet]
		public IActionResult Index()
		{
			return View();
		}

		[Route("/add")]
		[HttpPost]
		public IActionResult AddUser(User newUser)
		{
			if (ModelState.IsValid)
			{
				if (_context.Users.Any(u => u.Email == newUser.Email))
				{
					System.Console.WriteLine("Email already in use!");
					ModelState.AddModelError("Email", "Email already in use!");
				}
				else
				{
					System.Console.WriteLine("Adding user");
					PasswordHasher<User> Hasher = new PasswordHasher<User>();
					newUser.Password = Hasher.HashPassword(newUser, newUser.Password);
					newUser.CreatedAt = DateTime.Now;
					newUser.UpdatedAt = DateTime.Now;
					_context.Add(newUser);
					_context.SaveChanges();

					HttpContext.Session.SetInt32("user", newUser.UserId);
					return RedirectToAction("AllWeddings");
				}
			}

			System.Console.WriteLine("Model invalid!");
			return View("Index");
		}

		[Route("login")]
		[HttpPost]
		public IActionResult Login(User userSubmission)
		{
			System.Console.WriteLine("Logging in user");
			if (userSubmission.Email != null)
			{
				System.Console.WriteLine("Model valid");
				var userInDb = _context.Users.FirstOrDefault(u => u.Email == userSubmission.Email);
				if (userInDb != null)
				{
					System.Console.WriteLine("Email exists");
					// Initialize hasher object
					var hasher = new PasswordHasher<User>();

					// varify provided password against hash stored in db
					var result = hasher.VerifyHashedPassword(userSubmission, userInDb.Password, userSubmission.Password);

					// result can be compared to 0 for failure
					if (result != 0)
					{
						HttpContext.Session.SetInt32("user", userInDb.UserId);
						System.Console.WriteLine("Success! Redirecting to all weddings");
						return RedirectToAction("AllWeddings");
					}
					else
					{
						System.Console.WriteLine("Invalid password!");
					}
				}
				else
				{
					System.Console.WriteLine("Email does not exist!");
				}
			}
			ModelState.AddModelError("Email", "Invalid Email/Password");
			System.Console.WriteLine("Login unsuccessful! Returning to login screen!");
			return View("Index");
		}

		[Route("/weddings")]
		[HttpGet]
		public IActionResult AllWeddings()
		{
			int? login = HttpContext.Session.GetInt32("user");
			if (login != null)
			{
				System.Console.WriteLine("Rendering all weddings");
				NewProductView niceView = new NewProductView();
				IEnumerable<Wedding> AllWeddings = _context.Weddings.OrderBy(x => x.Date);
				niceView.AllWeddings = AllWeddings.ToList();
				niceView.host = (int)login;

				return View("WeddingsAll", niceView);
			}

			ModelState.AddModelError("Email", "You must login!");
			return View("Index");
		}

		[Route("weddings/{i}")]
		[HttpGet]
		public IActionResult ShowWedding(int i)
		{
			int? login = HttpContext.Session.GetInt32("user");
			if (login != null)
			{
				System.Console.WriteLine("Rendering wedding with id: " + i);
				IEnumerable<Wedding> AllWeddings = _context.Weddings.OrderBy(c => c.Date)
				.Include(wedding=>wedding.Reservations);
				// .ThenInclude(r=>r.User);
				System.Console.WriteLine("Count: " + AllWeddings.Count());

				Wedding ThisWedding = AllWeddings.FirstOrDefault(product => product.WeddingId == i);

				return View("WeddingShow", ThisWedding);
			}

			ModelState.AddModelError("Email", "You must login!");
			return View("Index");
		}


	}
}
