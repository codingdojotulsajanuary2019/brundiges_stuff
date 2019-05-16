using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Entity.Models;

using Microsoft.EntityFrameworkCore;
using Entity.Models;
using System.Linq;

namespace Entity.Controllers
{
	public class HomeController : Controller
	{
		private MyContext dbContext;

		public HomeController(MyContext context)
		{
			dbContext = context;
		}

		[Route("")]
		[HttpGet]
		public IActionResult Index()
		{
			IEnumerable<Dish> sortDishes = dbContext.Dishes.OrderByDescending(d => d.UpdatedAt);
			List<Dish> AllDishes = sortDishes.ToList();
			return View("Index", AllDishes);
		}

		[Route("{i}")]
		[HttpGet]
		public IActionResult ShowDish(int i)
		{
			Dish Dish = dbContext.Dishes.FirstOrDefault(a => a.DishId == i);
			return View("Dish", Dish);
		}

		[Route("new")]
		[HttpGet]
		public IActionResult renderNewDish()
		{
			System.Console.WriteLine("\nBig chungus.\n");
			System.Console.WriteLine("\nRendering new dish page\n");
			return View("DishNew");
		}

		[Route("new/add")]
		[HttpPost]
		public IActionResult AddDish(Dish newDish)
		{
			if (ModelState.IsValid)
			{
				newDish.CreatedAt =	DateTime.Now;
				newDish.UpdatedAt =	DateTime.Now;
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

	}
}
