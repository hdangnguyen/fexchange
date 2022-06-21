using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FExchange.DTOs
{
    public class AccountDTO 
    {
        public int Id { get; set; }
        public string Gmail { get; set; }
        public string Status { get; set; }
        public int? Role { get; set; }
        public string FullName { get; set; }
        public double? Bean { get; set; }


        public string Role1 { get; set; }
        public int NumberOfProductPosts { get; set; }
        public int NumberOfOrders { get; set; }
        public int NumberOfNotifications { get; set; }
    }
}
