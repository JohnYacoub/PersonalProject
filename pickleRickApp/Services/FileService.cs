using Amazon;
using Amazon.Runtime;
using Amazon.S3;
using Amazon.S3.Transfer;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Options;
using pickleRickApp.Models;
using pickleRickApp.Models.AppSettings;
using System;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using System.Threading.Tasks;

namespace pickleRickApp.Services
{
    public class FileService 
    {

        private static IAmazonS3 s3Client;
       // private AWSCredential _aWSCredential;
        //public FileService(IOptions<AWSCredential> aWSCredential)
        //{
        //    this.ConnectionString = connectionString;
        //    _aWSCredential = aWSCredential.Value;
        //}

        public async Task<string> UploadFile(IFormFile file) // should i delete the id ?
        {
            TransferUtility fileTransferUtility = null;
            BasicAWSCredentials credentials = null;
            string bucketName = "aws-john-b1";
            string filePath = Path.GetTempFileName();
            string keyName = bucketName + Guid.NewGuid() + "_" + file.FileName;

            using (FileStream stream = new FileStream(filePath, FileMode.Create))
            {
                credentials = new BasicAWSCredentials("AKIAIONXFRLAFBYKNUEQ", "WYxiJFDA6VRQ7Ks8O67VjNGYrvpccHtiuQXdpdWF");
                s3Client = new AmazonS3Client(credentials, RegionEndpoint.USWest1);
                file.CopyTo(stream);
                fileTransferUtility = new TransferUtility(s3Client);
                await fileTransferUtility.UploadAsync(stream, bucketName, keyName);
            }
            //string url = "https://aws-john-b1.s3-us-west-1.amazonaws.com/" + keyName;
            //return url;

           // This below section inserts file information to sql database.
           FileAddRequest model = new FileAddRequest()
           {
               Name = file.FileName,
               Url = "https://aws-john-b1.s3-us-west-1.amazonaws.com/" + keyName,
               FileType = 1,
           };

            Add(model); // i have removed the id from here 

            return model.Url;
        }

        private string connectionString = "Server=localhost;Database=RickAndMordy;Trusted_Connection=true";
        private string ConnectionString { get; set; }
        public FileService()
        {
            this.ConnectionString = connectionString;
        }

        public int Add(FileAddRequest model)
        {

            using (SqlConnection conn = new SqlConnection(ConnectionString))
            {
                conn.Open();

                SqlCommand cmd = conn.CreateCommand();

                cmd.CommandText = "dbo.Files_Insert";
                cmd.CommandType = CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@Name", model.Name);
                cmd.Parameters.AddWithValue("@Url", model.Url);
                cmd.Parameters.AddWithValue("@FileType", model.FileType);

                SqlParameter idParam = cmd.Parameters.Add("@Id", SqlDbType.Int);
                idParam.Direction = ParameterDirection.Output;

                cmd.ExecuteNonQuery();

                return (int)idParam.Value;
            }

        }
    }
}
