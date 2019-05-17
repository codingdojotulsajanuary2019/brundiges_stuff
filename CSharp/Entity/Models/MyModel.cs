using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entity.Models
{
	public class User
	{
		// auto-implemented properties need to match the columns in your table
		// the [Key] attribute is used to mark the Model property being used for your table's Primary Key
		[Key]
		public int UserId { get; set; }
		// MySQL VARCHAR and TEXT types can be represeted by a string

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
		public DateTime CreatedAt { get; set; }
		public DateTime UpdatedAt { get; set; }
	}
}