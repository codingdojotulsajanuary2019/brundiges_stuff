using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;

namespace Entity.Models
{
	public class Category
	{
		// auto-implemented properties need to match the columns in your table
		// the [Key] attribute is used to mark the Model property being used for your table's Primary Key
		[Key]
		public int CategoryId { get; set; }
		// MySQL VARCHAR and TEXT types can be represeted by a string

		[Required]
		[MinLength(2)]
		[Display(Name = "Name")]
		public string Name { get; set; }

		[NotMapped]
		public List<Connection> Connections { get; set; }

		public Category()
		{
			Connections = new List<Connection>();
		}

		public DateTime CreatedAt { get; set; }
		public DateTime UpdatedAt { get; set; }
	}
}