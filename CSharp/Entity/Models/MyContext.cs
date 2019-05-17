using Microsoft.EntityFrameworkCore;

namespace Entity.Models
{
	public class MyContext : DbContext
	{
		public MyContext(DbContextOptions options) : base(options) { }
		public DbSet<User> Users { get; set; }
		public DbSet<Dish> Dishes { get; set; }
		public DbSet<Chef> Chefs { get; set; }
	}
}
