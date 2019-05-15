using System;
using System.Collections.Generic;
using System.Linq;
using JsonData;

namespace ConsoleApplication
{
	public class Program
	{
		public static void Main(string[] args)
		{
			//Collections to work with
			List<Artist> Artists = MusicStore.GetData().AllArtists;
			List<Group> Groups = MusicStore.GetData().AllGroups;

			//========================================================
			//Solve all of the prompts below using various LINQ queries
			//========================================================

			Artist mtVernon = Artists.FirstOrDefault(artist => artist.Hometown == "Mount Vernon");
			System.Console.WriteLine(mtVernon.ArtistName + " is the only rapman from Mount Vernon");

			IEnumerable<Artist> allRapmen = Artists.OrderBy(a => a.Age);
			Artist youngest = allRapmen.FirstOrDefault();
			System.Console.WriteLine(youngest.ArtistName + " is only " + youngest.Age);

			IEnumerable<Artist> wills = Artists.Where(a => a.GivenName.Contains("William"));
			System.Console.WriteLine("No. of artists named William: " + wills.Count() + " these include:");
			foreach (Artist will in wills)
			{
				System.Console.WriteLine("    " + will.GivenName);
			}

			IEnumerable<Artist> atlantans = Artists.Where(a => a.Hometown == "Atlanta");
			atlantans = atlantans.OrderByDescending(a => a.Age);

			System.Console.WriteLine("The three oldest rapmen from Atlanta are: ");
			for (int i = 0; i < 3; i++)
			{
				Artist atlantan = atlantans.ElementAt(i);
				System.Console.WriteLine("    " + atlantan.ArtistName + ": " + atlantan.Age);
			}

			IEnumerable<Group> shortGroups = Groups.Where(g => g.GroupName.Length < 8);
			System.Console.WriteLine("Groups with names less than 8 letters:");
			foreach (Group group in shortGroups)
			{
				System.Console.WriteLine("    " + group.GroupName);
			}

			Group wutang = Groups.FirstOrDefault(g => g.GroupName == "Wu-Tang Clan");
			System.Console.WriteLine("Members of the Wu-Tang Clan:");
			foreach (Artist rapman in wutang.Members)
			{
				System.Console.WriteLine("    " + rapman.ArtistName);
			}
			System.Console.WriteLine("Members of the Wu-Tang Clan that you should fuck wit:");

			//(Optional) Display the Group Name of all groups that have members that are not from New York City

			IEnumerable<Group> nycGroups = Groups.Where(g => g.Members.ElementAt(0).Hometown != "New York City");
			System.Console.WriteLine("Groups not from New York:");
			foreach (Group group in nycGroups)
			{
				System.Console.WriteLine("    " + group.GroupName);
			}
			System.Console.WriteLine("That doesn't seem right but I don't know enough to argue\n");

			Console.WriteLine("Total rapmen: " + Artists.Count);
			Console.WriteLine("Total groups: " + Groups.Count);
		}
	}
}
