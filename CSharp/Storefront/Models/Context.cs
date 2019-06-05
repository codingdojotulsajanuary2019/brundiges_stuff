using Microsoft.EntityFrameworkCore;


namespace IntroToEntity.Models
{
	public class Context : DbContext
	{
		// base() calls the parent class' constructor passing the "options" parameter along
		public Context(DbContextOptions options) : base(options) { }

		public DbSet<User> Users { get; set; }
		public DbSet<Product> Products { get; set; }
		public DbSet<Order> Orders { get; set; }
	}
}