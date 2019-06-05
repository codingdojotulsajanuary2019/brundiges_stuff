using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Http;

using MessageFrogC.Models;
namespace MessageFrogC.Controllers
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
			return View();
		}

		[Route("/add")]
		[HttpPost]
		public IActionResult AddUser(MyLoginView myMessageView)
		{
			User newUser = myMessageView.Register;
			if (ModelState.IsValid)
			{
				if (_context.Users.Any(u => u.Email == newUser.Email))
				{
					System.Console.WriteLine("Email already in use!");
					ModelState.AddModelError("Register.Email", "Email already in use!");
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
					return RedirectToAction("RenderPage");
				}
			}

			System.Console.WriteLine("Model invalid!");
			return View("Index");
		}

		[Route("login")]
		[HttpPost]
		public IActionResult Login(MyLoginView myLoginView)
		{
			System.Console.WriteLine("Logging in user");
			User userSubmission = myLoginView.Login;
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
						System.Console.WriteLine("Success! Redirecting to all messages");
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
			}
			ModelState.AddModelError("Email", "Invalid Email/Password");
			System.Console.WriteLine("Login unsuccessful! Returning to login screen!");
			return View("Index");
		}

		[Route("message")]
		[HttpGet]
		public IActionResult RenderPage()
		{
			int? login = HttpContext.Session.GetInt32("user");
			if (login == null)
			{
				ModelState.AddModelError("Email", "You must login!");
				return View("Index");
			}

			IEnumerable<Message> Messages = _context.Messages.OrderByDescending(c => c.CreatedAt)
				.Include(m => m.User).Include(m => m.Comments).Include(m => m.User);

			System.Console.WriteLine("Rendering " + Messages.Count() + " messages");

			MyMessageView MyMessages = new MyMessageView();
			MyMessages.Messages = Messages.ToList();

			MyMessages.LoggedUser = _context.Users.FirstOrDefault(u => u.UserId == (int)login);

			return View("Page", MyMessages);
		}

		[Route("/message/new")]
		[HttpPost]
		public IActionResult NewMessage(MyMessageView myMessageView)
		{
			int? login = HttpContext.Session.GetInt32("user");
			if (login == null)
			{
				ModelState.AddModelError("Email", "You must login!");
				return View("Index");
			}

			if (ModelState.IsValid)
			{
				System.Console.WriteLine("Adding message");

				Message newMessage = myMessageView.newMessage;

				newMessage.UserId = (int)login;
				newMessage.CreatedAt = DateTime.Now;
				newMessage.UpdatedAt = DateTime.Now;
				_context.Add(newMessage);
				_context.SaveChanges();

				HttpContext.Session.SetInt32("user", newMessage.UserId);
			}
			else
			{

			}
			return RedirectToAction("RenderPage");
		}

		[Route("/message/comment")]
		[HttpPost]
		public IActionResult NewComment(MyMessageView myMessageView)
		{
			System.Console.WriteLine("Big chungus");
			int? login = HttpContext.Session.GetInt32("user");
			if (login == null)
			{
				ModelState.AddModelError("Email", "You must login!");
				return View("Index");
			}

			System.Console.WriteLine("Adding message");

			Comment newComment = myMessageView.newComment;

			newComment.UserId = (int)login;
			newComment.CreatedAt = DateTime.Now;
			newComment.UpdatedAt = DateTime.Now;
			_context.Add(newComment);
			_context.SaveChanges();

			HttpContext.Session.SetInt32("user", newComment.UserId);

			return RedirectToAction("RenderPage");
		}

		[Route("logout")]
		[HttpGet]
		public IActionResult Logout()
		{
			HttpContext.Session.Clear();

			return RedirectToAction("Index");
		}


	}
}
