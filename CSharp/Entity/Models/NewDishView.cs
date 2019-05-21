using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;

namespace Entity.Models
{
	public class NewDishView
	{

		public Dish dish { get; set; }
		public List<Chef> chefs { get; set; }
		
	}
}