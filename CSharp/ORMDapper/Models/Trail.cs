using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ORMDapper.Models
{
	public class Trail
	{
		[Key]
		public long Id { get; set; }

		[Required]
		[MinLength(2)]
		[Display(Name = "Name")]
		public string Name { get; set; }

		[Required]
		[MinLength(10)]
		[MaxLength(512)]
		[Display(Name = "Description")]
		public string Description { get; set; }

		[Required]
		[Display(Name = "Trail Length")]
		public double Length { get; set; }

		[Required]
		[Display(Name = "Elevation Change")]
		public int Elevation { get; set; }

		[Required]
		[Range(-180, 180)]
		[Display(Name = "Longitude")]
		public double Longitude { get; set; }

		[Required]
		[Range(-90, 90)]
		[Display(Name = "Latitude")]
		public double Latitude { get; set; }

	}
}
