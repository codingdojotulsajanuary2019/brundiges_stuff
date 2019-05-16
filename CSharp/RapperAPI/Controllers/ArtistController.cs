using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace RapperAPI.Controllers
{


	public class ArtistController : Controller
	{

		private List<Artist> allArtists;

		public ArtistController()
		{
			allArtists = JsonToFile<Artist>.ReadJson();
		}

		//This method is shown to the user navigating to the default API domain name
		//It just display some basic information on how this API functions
		[Route("")]
		[HttpGet]
		public string Index()
		{
			//String describing the API functionality
			string instructions = "Welcome to the Music API~~\n========================\n";
			instructions += "    Use the route /artists/ to get artist info.\n";
			instructions += "    End-points:\n";
			instructions += "       *Name/{string}\n";
			instructions += "       *GivenName/{string}\n";
			instructions += "       *Hometown/{string}\n";
			instructions += "       *GroupId/{int}\n\n";
			instructions += "    Use the route /groups/ to get group info.\n";
			instructions += "    End-points:\n";
			instructions += "       *Name/{string}\n";
			instructions += "       *GroupId/{int}\n";
			instructions += "       *ListArtists=?(true/false)\n";
			return instructions;
		}

		[Route("/artists/name/{name}")]
		[HttpGet]
		public IEnumerable<Artist> ArtistName(string name)
		{
			IEnumerable<Artist> artists = allArtists.Where(a => a.ArtistName.Contains(name));

			return artists;
		}

		[Route("/artists/givenname/{name}")]
		[HttpGet]
		public IEnumerable<Artist> GivenName(string name)
		{
			IEnumerable<Artist> artists = allArtists.Where(a => a.GivenName.Contains(name));

			return artists;
		}

		[Route("/artists/hometown/{name}")]
		[HttpGet]
		public IEnumerable<Artist> Hometown(string name)
		{
			IEnumerable<Artist> artists = allArtists.Where(a => a.Hometown.Contains(name));

			return artists;
		}

		[Route("/artists/groupid/{id}")]
		[HttpGet]
		public IEnumerable<Artist> GroupId(int id)
		{
			IEnumerable<Artist> artists = allArtists.Where(a => a.GroupId == id);

			return artists;
		}

	}
}