using System;
using System.Collections.Generic;
using ORMDapper.Models;
using Microsoft.AspNetCore.Mvc;
using ORMDapper.Factory;

namespace ORMDapper.Controllers
{
	public class HomeController : Controller
	{
		private readonly TrailFactory TrailFactory;
		public HomeController()
		{
			//Instantiate a TrailFactory object that is immutable (READONLY)
			//This establishes the initial DB connection for us.
			TrailFactory = new TrailFactory();
		}

		// GET: /Home/
		[HttpGet]
		[Route("")]
		public IActionResult Index()
		{
			//We can call upon the methods of the TrailFactory directly now.
			var AllModels = TrailFactory.FindAll();
			return View("Index", AllModels);
		}

		[HttpGet]
		[Route("trails/{index}")]
		public IActionResult ShowOne(int index)
		{
			//We can call upon the methods of the TrailFactory directly now.
			var ThisModel = TrailFactory.FindByID(index);
			return View("TrailShow", ThisModel);
		}

		[HttpGet]
		[Route("trails/add")]
		public IActionResult RenderNewTrail()
		{
			System.Console.WriteLine("\nBig chungus\n");
			return View("TrailNew");
		}

		[HttpPost]
		[Route("trails/add/new")]
		public IActionResult CreateTrail(Trail newTrail)
		{
			if (ModelState.IsValid)
			{
				System.Console.WriteLine("Model accepted. Submitting to DB");
				TrailFactory.Add(newTrail);
				return RedirectToAction("Index");
			}
			else
			{
				System.Console.WriteLine("Model invalid!");
				return RedirectToAction("RenderNewTrail");
			}

		}
	}
}
