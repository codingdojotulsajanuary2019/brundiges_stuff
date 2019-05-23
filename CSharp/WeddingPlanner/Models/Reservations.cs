using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;
namespace WeddingPlanner.Models
{
	public class Reservation
	{
		public int ReservationId { get; set; }
		public int UserId { get; set; }
		public int WeddingId { get; set; }
		public User User { get; set; }
		public Wedding Wedding { get; set; }

		public DateTime CreatedAt { get; set; }
	}
}