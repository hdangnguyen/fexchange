namespace FExchange.DTOs
{
    public class NotificationDTO
    {
        public int Id { get; set; }
        public int? AccountId { get; set; }
        public string Subject { get; set; }
        public string FullName { get; set; }
    }
}
