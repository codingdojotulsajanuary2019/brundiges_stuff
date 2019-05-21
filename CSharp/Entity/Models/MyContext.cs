using Microsoft.EntityFrameworkCore;

namespace Entity.Models
{
	public class MyContext : DbContext
	{
		public MyContext(DbContextOptions options) : base(options) { }
		public DbSet<User> Users { get; set; }
		public DbSet<Dish> Dishes { get; set; }
		public DbSet<Chef> Chefs { get; set; }
		public DbSet<Xaction> Xactions { get; set; }
		public DbSet<Category> Categories { get; set; }
		public DbSet<Product> Products { get; set; }
		public DbSet<Connection> Connections { get; set; }
	}
}
