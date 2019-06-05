using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace IntroToEntity.Models
{
	public class Product
	{
		[Key]
		public int ProductId { get; set; }

		[Required]
		[MinLength(2)]
		[Display(Name = "Name")]
		public string Name { get; set; }

		[Required]
		[MinLength(2)]
		[Display(Name = "Url")]
		public string Url { get; set; }

		[Required]
		[Range(0, Int16.MaxValue)]
		[Display(Name = "price")]
		public int price { get; set; }

		[Required]
		[Range(0, Int16.MaxValue)]
		[Display(Name = "stock")]
		public int stock { get; set; }

		[NotMapped]
		public string Span { get; set; }

		public List<Order> Orders { get; set; }

		public DateTime CreatedAt { get; set; }
		public DateTime UpdatedAt { get; set; }

	}
}