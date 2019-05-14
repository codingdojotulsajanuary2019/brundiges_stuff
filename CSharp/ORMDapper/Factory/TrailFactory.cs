using System.Collections.Generic;
using System.Linq;
using Dapper;
using System.Data;
using MySql.Data.MySqlClient;
using ORMDapper.Models;

namespace ORMDapper.Factory
{
	public class TrailFactory
	{
		private string connectionString;
		public TrailFactory()
		{
			connectionString = "server=localhost;userid=root;password=Cheeseburger52;port=3306;database=csharpstuff;SslMode=None";
		}
		internal IDbConnection Connection
		{
			get
			{
				return new MySqlConnection(connectionString);
			}
		}

		public void Add(Trail item)
		{
			using (IDbConnection dbConnection = Connection)
			{
				string query = "INSERT INTO trails (Name, description, length, elevation, longitude, latitude) VALUES (@Name, @Description, @Length, @Elevation, @Longitude, @Latitude)";
				dbConnection.Open();
				dbConnection.Execute(query, item);
			}
		}
		public IEnumerable<Trail> FindAll()
		{
			using (IDbConnection dbConnection = Connection)
			{
				dbConnection.Open();
				return dbConnection.Query<Trail>("SELECT * FROM trails");
			}
		}
		public Trail FindByID(int id)
		{
			using (IDbConnection dbConnection = Connection)
			{
				dbConnection.Open();
				return dbConnection.Query<Trail>("SELECT * FROM trails WHERE Id = @Id", new { Id = id }).FirstOrDefault();
			}
		}

	}
}
