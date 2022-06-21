namespace FExchange.DTOs
{
    public class PaymentDTO
    {
        public int Id { get; set; }
        public int? OrderId { get; set; }
        public double? Amount { get; set; }
        public double? BeanBefore { get; set; }
        public double? BeanAfter { get; set; }

        public int NumberOfOrders { get; set; }
    }
}
