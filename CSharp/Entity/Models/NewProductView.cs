using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;

namespace Entity.Models
{
	public class NewProductView
	{

		public Product product { get; set; }
		public Category category { get; set; }
		public Connection connection { get; set; }

		public List<Product> products { get; set; }
		public List<Category> categories { get; set; }
	}
}