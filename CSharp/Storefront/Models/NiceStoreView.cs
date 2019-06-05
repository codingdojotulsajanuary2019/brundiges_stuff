using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace IntroToEntity.Models
{
	public class NiceStoreView
	{

		public List<User> Users { get; set; }
		public List<Product> Products { get; set; }
		public List<Order> Orders { get; set; }

		public User NewUser { get; set; }
		public Product NewProduct { get; set; }
		public Order NewOrder { get; set; }
	}
}