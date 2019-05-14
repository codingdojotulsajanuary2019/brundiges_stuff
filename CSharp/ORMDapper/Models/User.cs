using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ORMDapper.Models
{
	public class User
	{
		[Key]
		public long Id { get; set; }

		[Required]
		[MinLength(2)]
		[Display(Name = "Name")]
		public string Name { get; set; }

		[Required]
		[MinLength(2)]
		[MaxLength(512)]
		[Display(Name = "Quote")]
		public string Quote { get; set; }
	}
}
