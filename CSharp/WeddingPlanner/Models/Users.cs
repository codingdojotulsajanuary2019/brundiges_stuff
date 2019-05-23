using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;

namespace WeddingPlanner.Models
{
	public class User
	{
		[Key]
		public int UserId { get; set; }

		[Required]
		[MinLength(2)]
		[Display(Name = "First Name")]
		public string FirstName { get; set; }

		[Required]
		[MinLength(2)]
		[Display(Name = "Last Name")]
		public string LastName { get; set; }

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

		public List<Reservation> Reservations { get; set; }
		public DateTime CreatedAt { get; set; }
		public DateTime UpdatedAt { get; set; }

		public User()
		{
			Reservations = new List<Reservation>();
		}
	}
}