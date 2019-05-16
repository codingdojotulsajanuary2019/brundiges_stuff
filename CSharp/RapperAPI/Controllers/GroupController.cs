using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace RapperAPI.Controllers
{
	public class GroupController : Controller
	{
		List<Group> allGroups { get; set; }
		public GroupController()
		{
			allGroups = JsonToFile<Group>.ReadJson();
		}

		[Route("/groups/name/{name}")]
		[HttpGet]
		public IEnumerable<Group> GroupName(string name)
		{
			IEnumerable<Group> groups = allGroups.Where(a => a.GroupName.Contains(name));

			return groups;
		}

		[Route("/groups/id/{id}")]
		[HttpGet]
		public IEnumerable<Group> GroupId(int id)
		{
			IEnumerable<Group> groups = allGroups.Where(a => a.Id == id);

			return groups;
		}
	}
}