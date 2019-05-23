using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace MessageFrogC.Models
{
	public class Message
	{
		[Key]
		public int MessageId { get; set; }
		public string Content { get; set; }

		public User User { get; set; }

		public int UserId { get; set; }

		public List<Comment> Comments { get; set; }

		public DateTime CreatedAt { get; set; }
		public DateTime UpdatedAt { get; set; }

		public Message()
		{
			Comments = new List<Comment>();
		}
	}
}