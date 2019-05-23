using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;

namespace WeddingPlanner.Models
{
	public class NewProductView
	{

		public List<Wedding> AllWeddings { get; set; }
		public int host{ get; set; }
	}
}