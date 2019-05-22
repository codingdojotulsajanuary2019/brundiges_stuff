using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;
namespace WeddingPlanner.Models
{
	public class Wedding
	{
		[Key]
		public int WeddingId { get; set; }

		[Required]
		[MinLength(2)]
		[Display(Name = "Wedder One")]
		public string WedderOne { get; set; }

		[Required]
		[MinLength(2)]
		[Display(Name = "Wedder One")]
		public string WedderTwo { get; set; }

		[Required]
		// []
		public DateTime Date { get; set; }

		[Required]
		public int HostId { get; set; }

		[NotMapped]
		public User Host { get; set; }

		[NotMapped]
		public List<User> Guests { get; set; }

		[NotMapped]
		public List<Reservation> Reservations { get; set; }

		public Wedding()
		{
			Reservations = new List<Reservation>();
		}

		public DateTime CreatedAt { get; set; }
		public DateTime UpdatedAt { get; set; }
	}
}