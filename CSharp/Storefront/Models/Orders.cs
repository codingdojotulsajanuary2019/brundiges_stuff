using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace IntroToEntity.Models
{
	public class Order
	{
		[Key]
		public int OrderId { get; set; }

		[Required]
		[Range(0, Int16.MaxValue)]
		public int Quantity { get; set; }

		[NotMapped]
		[Range(0, Int16.MaxValue)]
		public int TotalPrice { get; set; }

		[NotMapped]
		public string Span { get; set; }

		public Product Product { get; set; }
		public int ProductId { get; set; }
		public User User { get; set; }
		public int UserId { get; set; }

		public DateTime CreatedAt { get; set; }
		public DateTime UpdatedAt { get; set; }
	}
}