using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;

namespace Entity.Models
{
	public class Connection
	{
		[Key]
		public int ConnectionId { get; set; }

		public int ProductId { get; set; }

		public int CategoryId { get; set; }

		public Product Product { get; set; }

		public Category Category { get; set; }

		public DateTime CreatedAt { get; set; }
	}
}