using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System;

namespace Entity.Models
{
	public class Chef
	{
		[Key]
		public int ChefId { get; set; }

		[Required]
		[MinLength(2)]
		[Display(Name = "Name")]
		public string Name { get; set; }

		[Display(Name = "Date of Birth")]
		public DateTime DoB { get; set; }

		public int NoDishes { get; set; }

		[NotMapped]
		public int Age { get; set; }

		[NotMapped]
		public string strDate { get; set; }

		public DateTime CreatedAt { get; set; }
		public DateTime UpdatedAt { get; set; }
	}
}