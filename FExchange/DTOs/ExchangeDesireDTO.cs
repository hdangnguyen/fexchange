using System;

namespace FExchange.DTOs
{
    public class ExchangeDesireDTO
    {
        public int Id { get; set; }
        public int CategoryId { get; set; }
        public int ProductId { get; set; }

        public String CategoryName{ get; set; }
        public string ProductName { get; set; }
    }
}
