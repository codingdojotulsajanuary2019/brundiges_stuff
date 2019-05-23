using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MessageFrogC.Models
{
	public class User
	{
		[Key]
		public int UserId { get; set; }

		[Required]
		[MinLength(2)]
		[Display(Name = "Name")]
		public string Name { get; set; }

		[Required]
		[MinLength(2)]
		[Display(Name = "Email")]
		public string Email { get; set; }

		[Required]
		[MinLength(8)]
		[DataType(DataType.Password)]
		public string Password { get; set; }

		[NotMapped]
		[Compare("Password")]
		[DataType(DataType.Password)]
		public string Confirm { get; set; }

		public List<Message> Messages { get; set; }
		public List<Comment> Comments { get; set; }

		public DateTime CreatedAt { get; set; }
		public DateTime UpdatedAt { get; set; }

		public User()
		{
			Messages = new List<Message>();
			Comments = new List<Comment>();
		}
	}
}