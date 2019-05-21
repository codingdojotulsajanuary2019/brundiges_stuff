using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;

namespace Entity.Models
{
	public class Product
	{
		// auto-implemented properties need to match the columns in your table
		// the [Key] attribute is used to mark the Model property being used for your table's Primary Key
		[Key]
		public int ProductId { get; set; }
		// MySQL VARCHAR and TEXT types can be represeted by a string

		[Required]
		[MinLength(2)]
		[Display(Name = "Name")]
		public string Name { get; set; }

		[Required]
		[Range(0, 1000000)]
		public int Price { get; set; }

		[Required]
		[MinLength(2)]
		[Display(Name = "Description")]
		public string Description { get; set; }

		public List<Connection> Connections { get; set; }

		public DateTime CreatedAt { get; set; }
		public DateTime UpdatedAt { get; set; }
	}
}