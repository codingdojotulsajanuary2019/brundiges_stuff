using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace IntroToEntity.Models
{
	public class User
	{
		[Key]
		public int UserId { get; set; }

		[Required]
		[MinLength(2)]
		[Display(Name = "Name")]
		public string Name { get; set; }

		[NotMapped]
		public string Span { get; set; }

		public List<Order> Orders { get; set; }
		public DateTime CreatedAt { get; set; }
		public DateTime UpdatedAt { get; set; }

	}
}