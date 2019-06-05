using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Http;

using IntroToEntity.Models;

namespace IntroToEntity.Controllers
{
	public class HomeController : Controller
	{
		private Context _context;

		public HomeController(Context context)
		{
			_context = context;
		}

		[Route("")]
		[HttpGet]
		public IActionResult Index()
		{
			NiceStoreView nice = new NiceStoreView();
			nice.Products = _context.Products.OrderByDescending(x => x.CreatedAt).ToList();
			nice.Users = _context.Users.OrderByDescending(x => x.CreatedAt).ToList();
			nice.Orders = _context.Orders.OrderByDescending(x => x.CreatedAt).Include(x => x.User).Include(x => x.Product).ToList();

			if (nice.Products.Count() > 4)
			{
				nice.Products.RemoveRange(4, nice.Products.Count() - 4);
			}
			if (nice.Users.Count() > 4)
			{
				nice.Users.RemoveRange(4, nice.Users.Count() - 4);
			}
			if (nice.Orders.Count() > 4)
			{
				nice.Orders.RemoveRange(4, nice.Orders.Count() - 4);
			}

			foreach (User user in nice.Users)
			{
				user.Span = GetDistance(user.CreatedAt);
			}
			foreach (Order order in nice.Orders)
			{
				order.Span = GetDistance(order.CreatedAt);
			}

			return View("Index", nice);
		}

		[Route("/orders")]
		[HttpGet]
		public IActionResult Orders()
		{
			System.Console.WriteLine("Rendering orders page!");
			NiceStoreView nice = new NiceStoreView();
			nice.Orders = _context.Orders.OrderByDescending(x => x.CreatedAt).Include(x => x.User).Include(x => x.Product).ToList();
			nice.Products = _context.Products.Where(x => x.stock > 0).OrderByDescending(x => x.CreatedAt).ToList();
			nice.Users = _context.Users.OrderByDescending(x => x.CreatedAt).ToList();

			foreach (Order order in nice.Orders)
			{
				order.TotalPrice = order.Product.price * order.Quantity;
			}

			return View("Orders", nice);
		}

		[Route("/orders/add")]
		[HttpPost]
		public IActionResult NewOrder(NiceStoreView nice)
		{
			if (ModelState.IsValid)
			{
				System.Console.WriteLine("Recieved order!");
				int productId = nice.NewOrder.ProductId;
				Product purchased = _context.Products.FirstOrDefault(x => x.ProductId == productId);
				if (nice.NewOrder.Quantity > purchased.stock)
				{
					System.Console.WriteLine("Requested more items than have in stock!");
					ModelState.AddModelError("NewOrder.Quantity", "You may order no more than " + purchased.stock + " of that item!");
					return RedirectToAction("Orders");
				}
				nice.NewOrder.CreatedAt = DateTime.Now;
				nice.NewOrder.UpdatedAt = DateTime.Now;
				_context.Orders.Add(nice.NewOrder);
				purchased.stock -= nice.NewOrder.Quantity;
				_context.SaveChanges();
			} else {
				
			}

			return RedirectToAction("Orders");
		}

		[Route("/products")]
		[HttpGet]
		public IActionResult Products()
		{
			System.Console.WriteLine("Rendering products page!");
			NiceStoreView nice = new NiceStoreView();
			nice.Products = _context.Products.OrderByDescending(x => x.stock).ToList();

			return View("Products", nice);
		}

		[Route("/products/add")]
		[HttpPost]
		public IActionResult NewProduct(NiceStoreView nice)
		{
			System.Console.WriteLine("Recieved new product!");
			if (ModelState.IsValid)
			{
				nice.NewProduct.CreatedAt = DateTime.Now;
				nice.NewProduct.UpdatedAt = DateTime.Now;
				_context.Products.Add(nice.NewProduct);
				_context.SaveChanges();
			}

			return RedirectToAction("Products");
		}

		[Route("/customers")]
		[HttpGet]
		public IActionResult Users()
		{
			System.Console.WriteLine("Rendering users page!");
			NiceStoreView nice = new NiceStoreView();
			nice.Users = _context.Users.OrderByDescending(x => x.CreatedAt).ToList();

			return View("Users", nice);
		}


		public string GetDistance(DateTime created)
		{
			DateTime now = DateTime.Now;
			// System.Console.WriteLine("Now: " + now.ToShortDateString());
			TimeSpan span = now.Subtract(created);

			if (span.TotalSeconds < 60)
			{
				return "just now";
			}
			else if (span.TotalMinutes < 60)
			{
				if (Math.Floor(span.TotalMinutes) == 1)
				{
					return "1 minute ago";
				}
				return Math.Floor(span.TotalMinutes) + " minutes ago";
			}
			else if (span.TotalHours < 24)
			{
				if (Math.Floor(span.TotalHours) == 1)
				{
					return "1 hour ago";
				}
				return Math.Floor(span.TotalHours) + " hours ago";
			}
			else if (span.TotalDays < 100)
			{
				if (Math.Floor(span.TotalDays) == 1)
				{
					return "1 day ago";
				}
				return Math.Floor(span.TotalDays) + " days ago";
			}
			else
			{
				return "long ago";
			}
		}

	}
}
