using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using System.Linq;

using Entity.Models;

namespace Entity.Controllers
{
	public class HomeController : Controller
	{
		private MyContext dbContext;

		public IEnumerable<Dish> JoinDishes(IEnumerable<Dish> AllDishes, IEnumerable<Chef> AllChefs)
		{

			IEnumerable<Dish> Alliterations = AllDishes.Join(AllChefs,
		Dish => Dish.ChefId,
		Chef => Chef.ChefId,
		(dish, chef) =>
		{
			dish.Chef = chef;
			return dish;
		});

			return Alliterations;
		}

		public HomeController(MyContext context)
		{
			dbContext = context;
		}

		[Route("")]
		[HttpGet]
		public IActionResult Index()
		{
			IEnumerable<Dish> sortDishes = dbContext.Dishes.OrderByDescending(d => d.UpdatedAt);
			IEnumerable<Chef> sortChefs = dbContext.Chefs.OrderBy(d => d.ChefId);
			sortDishes = JoinDishes(sortDishes, sortChefs);

			List<Dish> AllDishes = sortDishes.ToList();

			return View("Index", AllDishes);
		}

		[Route("{i}")]
		[HttpGet]
		public IActionResult ShowDish(int i)
		{
			IEnumerable<Dish> sortDishes = dbContext.Dishes.Where(d => d.DishId == i);
			IEnumerable<Chef> sortChefs = dbContext.Chefs.OrderBy(d => d.ChefId);
			sortDishes = JoinDishes(sortDishes, sortChefs);

			if (sortDishes.Count() > 0)
			{
				Dish Dish = sortDishes.ElementAt(0);
				return View("Dish", Dish);
			}
			else
			{
				return RedirectToAction("Index");
			}


		}

		[Route("new")]
		[HttpGet]
		public IActionResult renderNewDish()
		{
			System.Console.WriteLine("\nRendering new dish page\n");

			return View("DishNew");
		}

		[Route("new/add")]
		[HttpPost]
		public IActionResult AddDish(Dish newDish)
		{
			if (ModelState.IsValid)
			{
				newDish.CreatedAt = DateTime.Now;
				newDish.UpdatedAt = DateTime.Now;
				
				Chef niceChef = dbContext.Chefs.FirstOrDefault(a => a.ChefId == newDish.ChefId);
				newDish.Chef = niceChef;
				niceChef.NoDishes = niceChef.NoDishes + 1;

				dbContext.Add(newDish);
				dbContext.SaveChanges();
				return RedirectToAction("Index");
			}
			else
			{
				System.Console.WriteLine("Model invalid!");
				return RedirectToAction("renderNewDish");
			}
		}

		[Route("{id}/delete")]
		[HttpPost]
		public IActionResult DeleteDish(int id)
		{
			Dish RetrievedUser = dbContext.Dishes.SingleOrDefault(dish => dish.DishId == id);

			dbContext.Dishes.Remove(RetrievedUser);
			dbContext.SaveChanges();

			return RedirectToAction("Index");
		}

		[Route("{i}/edit")]
		[HttpGet]
		public IActionResult RenderUpdateDish(int i)
		{
			Dish Dish = dbContext.Dishes.FirstOrDefault(a => a.DishId == i);
			return View("DishUpdate", Dish);
		}

		[Route("dish/update")]
		[HttpPost]
		public IActionResult UpdateDish(Dish newDish)
		{
			Dish RetrievedDish = dbContext.Dishes.SingleOrDefault(dish => dish.DishId == newDish.DishId);

			System.Console.WriteLine("Name: " + newDish.Name);
			System.Console.WriteLine("Name: " + RetrievedDish.Name);
			RetrievedDish.Name = newDish.Name;
			RetrievedDish.Chef = newDish.Chef;
			RetrievedDish.Calories = newDish.Calories;
			RetrievedDish.Tastiness = newDish.Tastiness;
			RetrievedDish.Description = newDish.Description;
			RetrievedDish.UpdatedAt = DateTime.Now;
			dbContext.SaveChanges();

			return RedirectToAction("Index");
		}

		[Route("chef")]
		[HttpGet]
		public IActionResult RenderAllChefs()
		{
			System.Console.WriteLine("Rendering all chefs");
			IEnumerable<Chef> sortChefs = dbContext.Chefs.OrderByDescending(c => c.UpdatedAt);
			List<Chef> AllChefs = sortChefs.ToList();
			foreach (Chef chef in AllChefs)
			{
				DateTime zeroTime = new DateTime(1, 1, 1);
				DateTime a = chef.DoB;
				DateTime b = DateTime.Now;

				TimeSpan span = b - a;
				int years = (zeroTime + span).Year - 1;

				Console.WriteLine("Age: " + years);
				chef.Age = years;
			}
			return View("AllChefs", AllChefs);
		}

		[Route("chef/new")]
		[HttpGet]
		public IActionResult RenderNewChef()
		{
			return View("ChefNew");
		}

		[Route("chef/add")]
		[HttpPost]
		public IActionResult AddChef(Chef newChef)
		{
			if (ModelState.IsValid)
			{
				DateTime inputDate = DateTime.Parse(newChef.strDate);
				if (inputDate > DateTime.Now)
				{
					System.Console.WriteLine("Input date cannot be in the future!");
					ModelState.AddModelError("strDate", "Date of birth cannot be in the future!");
					View("ChefNew");
				}
				else
				{
					newChef.DoB = inputDate;
					newChef.CreatedAt = DateTime.Now;
					newChef.UpdatedAt = DateTime.Now;

					dbContext.Add(newChef);
					dbContext.SaveChanges();
					return RedirectToAction("RenderAllChefs");
				}
			}

			System.Console.WriteLine("Model invalid!");
			return View("ChefNew");
		}

		// I'm so tired


		[Route("register")]
		[HttpGet]
		public IActionResult RenderRegister()
		{
			return View("LoginRegister");
		}

		[Route("register/add")]
		[HttpPost]
		public IActionResult AddUser(User newUser)
		{
			if (ModelState.IsValid)
			{
				if (dbContext.Users.Any(u => u.Email == newUser.Email))
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
					dbContext.Add(newUser);
					dbContext.SaveChanges();
					HttpContext.Session.SetInt32("login", 1);
					return RedirectToAction("RenderPage");
				}
			}

			System.Console.WriteLine("Model invalid!");
			return RedirectToAction("RenderRegister");
		}

		[Route("login")]
		[HttpGet]
		public IActionResult RenderLogin()
		{
			return View("LoginLogin");
		}

		[Route("login/login")]
		[HttpPost]
		public IActionResult Login(User userSubmission)
		{
			System.Console.WriteLine("Logging in user");
			if (userSubmission.Email != null)
			{
				System.Console.WriteLine("Model valid");
				var userInDb = dbContext.Users.FirstOrDefault(u => u.Email == userSubmission.Email);
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
						HttpContext.Session.SetInt32("login", 1);
						return RedirectToAction("RenderPage");
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
				ModelState.AddModelError("Email", "Invalid Email/Password");
				return View("SomeView");

			}

			System.Console.WriteLine("Login failed!");
			return RedirectToAction("RenderLogin");
		}

		[Route("login/page")]
		[HttpGet]
		public IActionResult RenderPage()
		{
			int? login = HttpContext.Session.GetInt32("login");
			if (login != null)
			{
				if (login == 1)
				{
					return View("LoginPage");
				}
			}

			ModelState.AddModelError("Email", "You must login!");
			return View("LoginLogin");
		}

		[Route("login/logout")]
		[HttpGet]
		public IActionResult Logout()
		{
			HttpContext.Session.Clear();
			return RedirectToAction("RenderLogin");
		}

	}
}
