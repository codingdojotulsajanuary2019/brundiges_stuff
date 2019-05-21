using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;
using System;

namespace Entity.Models
{
	public class Xaction
	{
		[Key]
		public int XactionId { get; set; }

		public int Amount { get; set; }
		
		public int UserId { get; set; }

		public DateTime CreatedAt { get; set; }

	}
}