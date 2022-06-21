using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FExchange.DTOs
{

    public class CategoryDTO
    {
        public int Id { get; set; }
        public string Category1 { get; set; }
        public int NumberOfExchangeDesires { get; set; }
        public int NumberOfProductPosts { get; set; }
    }
}
