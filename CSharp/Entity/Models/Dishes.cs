using System.ComponentModel.DataAnnotations;
using System;

namespace Entity.Models
{
	public class Dish
	{
		[Key]
		public int DishId { get; set; }
		// MySQL VARCHAR and TEXT types can be represeted by a string

		[Required]
		[MinLength(2)]
		[Display(Name = "Name")]
		public string Name { get; set; }

		[Required]
		[MinLength(2)]
		[Display(Name = "Chef")]
		public string Chef { get; set; }

		[Required]
		[Range(1, 5)]
		[Display(Name = "Tastiness")]
		public int Tastiness { get; set; }

		[Required]
		[Range(0, 10000)]
		[Display(Name = "Calories")]
		public int Calories { get; set; }

		[Required]
		[MinLength(2)]
		[MaxLength(1024)]
		[Display(Name = "Description")]
		public string Description { get; set; }
		// The MySQL DATETIME type can be represented by a DateTime
		public DateTime CreatedAt { get; set; }
		public DateTime UpdatedAt { get; set; }
	}
}