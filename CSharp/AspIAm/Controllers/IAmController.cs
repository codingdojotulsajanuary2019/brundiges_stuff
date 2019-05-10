using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Globalization;
using System;

namespace AspIAm.Controllers     //be sure to use your own project's namespace!
{
    public class HelloController : Controller
    {
        //for each route this controller is to handle:
        [HttpGet]       //type of request
        [Route("")]     //associated route string (exclude the leading /)
        public ViewResult Index()
        {
            return View("Index");
        }

        [HttpGet]
        [Route("projects")]
        public ViewResult Chungus()
        {
            return View("Project");
        }

        [HttpGet]
        [Route("contact")]
        public ViewResult Contact()
        {
            return View("Contact");
        }

        [HttpGet]
        [Route("razor")]
        public ViewResult Razor()
        {
            string[] words = { "Absolute Unit", "Big Chungus", "Crooked as a crocodile", "Dudebro Manguy", "Explosion noises!", "Frogs", "Good stuff", "Hotstuff", "I am." };
            ViewBag.Words = words;
            return View("Razor");
        }

        [HttpGet]
        [Route("time")]
        public ViewResult Time()
        {
            DateTime CurrentTime = DateTime.Now;
            ViewBag.Time = CurrentTime.ToString("yyyy-MM-dd, HH:mm:ss");
            return View("Time");
        }

        [HttpPost]
        [Route("submit")]
        public RedirectToActionResult Method()
        {
            System.Console.WriteLine("Formbly submitted!");
            return RedirectToAction("Index");
        }

        [HttpGet]
        [Route("form")]
        public ViewResult Form()
        {
            return View("Form");
        }

        [HttpPost]
        [Route("survey")]
        public ViewResult SurveySubmit(string name, string location, string language, string comment)
        {
            System.Console.WriteLine("Formbly submitted!");
            System.Console.WriteLine(name);
						System.Console.WriteLine(location);
						System.Console.WriteLine(language);
						System.Console.WriteLine(comment);
						ViewBag.Name = name;
						ViewBag.Location = location;
						ViewBag.Language = language;
						ViewBag.Comment = comment;
            return View("Results");
        }

    }
}
