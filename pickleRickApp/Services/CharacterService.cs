using pickleRickApp.Models;
using pickleRickApp.Models.Requests;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace pickleRickApp.Services
{
    public class CharacterService
    {
        private string connectionString = "Server=localhost;Database=RickAndMordy;Trusted_Connection=true";
        private string ConnectionString { get; set; }
        public CharacterService()
        {
            this.ConnectionString = connectionString;
        }

        public List<Character> GetAll()
        {
            List<Character> characters = null;

            using (SqlConnection conn = new SqlConnection(ConnectionString))
            {
                conn.Open();
                SqlCommand cmd = conn.CreateCommand();
                cmd.CommandText = "dbo.RickAndMordy_SelectAll";
                cmd.CommandType = CommandType.StoredProcedure;
                using (IDataReader reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        Character model = new Character();
                        int startingIndex = 0;
                        model.Id = reader.GetInt32(startingIndex++);
                        model.Name = reader.GetString(startingIndex++);
                        model.Status = reader.GetString(startingIndex++);
                        model.Species = reader.GetString(startingIndex++);
                        model.Type = reader.GetString(startingIndex++);
                        model.Gender = reader.GetString(startingIndex++);
                        model.Origin = reader.GetString(startingIndex++);
                        model.Location = reader.GetString(startingIndex++);
                        model.Image = reader.GetString(startingIndex++);
                        model.Episode = reader.GetString(startingIndex++);
                        model.Url = reader.GetString(startingIndex++);
                        if(characters == null)
                        {
                            characters = new List<Character>();
                        }
                        characters.Add(model);

                    }
                }
            }
            return characters;
        }

        public Character Get (int id)
        {
            Character character = null;
            using (SqlConnection conn = new SqlConnection(ConnectionString))
            {
                conn.Open();
                SqlCommand cmd = conn.CreateCommand();
                cmd.CommandText = "dbo.Character_SelectById";
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@Id", id);
                using (IDataReader reader = cmd.ExecuteReader())
                {

                    while (reader.Read())
                    {
                        Character model = new Character();
                        int startingIndex = 0;
                      
                        model.Id = reader.GetInt32(startingIndex++);
                        model.Name = reader.GetString(startingIndex++);
                        model.Status = reader.GetString(startingIndex++);
                        model.Species = reader.GetString(startingIndex++);
                        model.Type = reader.GetString(startingIndex++);
                        model.Gender = reader.GetString(startingIndex++);
                        model.Origin = reader.GetString(startingIndex++);
                        model.Location = reader.GetString(startingIndex++);
                        model.Image = reader.GetString(startingIndex++);
                        model.Episode = reader.GetString(startingIndex++);
                        model.Url = reader.GetString(startingIndex++);
                        if (character == null)
                        {
                            character = new Character();
                        }
                        character = (model);

                    }
                }
            }
            return character;

        }

        public int Add(CharacterAddRequest model)
        {
            using (SqlConnection conn = new SqlConnection(ConnectionString))
            {
                conn.Open();

                SqlCommand cmd = conn.CreateCommand();

                cmd.CommandText = "dbo.RickAndMordy_INSERT";
                cmd.CommandType = CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@Name", model.Name);
                cmd.Parameters.AddWithValue("@Status", model.Status);
                cmd.Parameters.AddWithValue("@Species", model.Species);
                cmd.Parameters.AddWithValue("@Type", model.Type);
                cmd.Parameters.AddWithValue("@Gender", model.Gender);
                cmd.Parameters.AddWithValue("@Origin", model.Origin);
                cmd.Parameters.AddWithValue("@Location", model.Location);
                cmd.Parameters.AddWithValue("@Image", model.Image);
                cmd.Parameters.AddWithValue("@Episode", model.Episode);
                cmd.Parameters.AddWithValue("@Url", model.Url);
                cmd.Parameters.AddWithValue("@CreatedBy", model.CreatedBy);

                SqlParameter idParam = cmd.Parameters.Add("@Id", SqlDbType.Int);
                idParam.Direction = ParameterDirection.Output;

                cmd.ExecuteNonQuery();

               return (int)idParam.Value;
            }

        }

        public void Update(int id, CharacterUpdateRequest model)
        {

            using (SqlConnection conn = new SqlConnection(connectionString))
            {
                conn.Open();
                SqlCommand cmd = conn.CreateCommand();

                cmd.CommandText = "dbo.Character_Update";
                cmd.CommandType = CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@Id", id);
                cmd.Parameters.AddWithValue("@Name", model.Name);
                cmd.Parameters.AddWithValue("@Status", model.Status);
                cmd.Parameters.AddWithValue("@Species", model.Species);
                cmd.Parameters.AddWithValue("@Type", model.Type);
                cmd.Parameters.AddWithValue("@Gender", model.Gender);
                cmd.Parameters.AddWithValue("@Origin", model.Origin);
                cmd.Parameters.AddWithValue("@Location", model.Location);
                cmd.Parameters.AddWithValue("@Image", model.Image);
                cmd.Parameters.AddWithValue("@Episode", model.Episode);
                cmd.Parameters.AddWithValue("@Url", model.Url);
                cmd.Parameters.AddWithValue("@CreatedBy", model.CreatedBy);

                cmd.ExecuteNonQuery();
            }
        }


        public void Delete(int id)
        {

            using (SqlConnection conn = new SqlConnection(connectionString))
            {

                conn.Open();
                SqlCommand cmd = conn.CreateCommand();
                cmd.CommandText = "dbo.Character_Delete";
                cmd.CommandType = CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@Id", id);

                cmd.ExecuteNonQuery();
            }
        }
    }
}
