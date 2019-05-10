using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace AspMvc.Models
{
	public class Survey
	{
		[Required]
		[MinLength(2)]
		[Display(Name = "Name")]
		public string Name { get; set; }
		public string Location { get; set; }
		public string Language { get; set; }
		
		[MinLength(20)]
		public string Comment { get; set; }
	}

}
