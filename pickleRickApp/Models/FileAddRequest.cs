using System.ComponentModel.DataAnnotations;

namespace pickleRickApp.Models
{
    public class FileAddRequest
    {
        [Required, MaxLength(50)]
        public string Name { get; set; }
        [Required, MaxLength(255)]
        public string Url { get; set; }
        [Required, Range(1, int.MaxValue)]
        public int FileType { get; set; }
    }
}
