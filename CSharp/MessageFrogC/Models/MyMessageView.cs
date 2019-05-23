using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace MessageFrogC.Models
{
	public class MyMessageView
	{

		public List<Message> Messages { get; set; }
		public Message newMessage { get; set; }
		public Comment newComment { get; set; }

		public User LoggedUser { get; set; }

	}
}