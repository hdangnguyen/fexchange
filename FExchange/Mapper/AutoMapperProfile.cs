using AutoMapper;
using BusinessObject.Models;
using FExchange.DTOs;
namespace FExchange.Mapper
{
    public class AutoMapperProfile: Profile
    {
        public AutoMapperProfile()
        {
            //Account
            CreateMap<Account, AccountDTO>()
                .ForMember(des => des.Role1, act => act.MapFrom(src => src.RoleNavigation.Role1))
                .ForMember(des => des.NumberOfProductPosts, act => act.MapFrom(src => src.ProductPosts.Count))
                .ForMember(des => des.NumberOfOrders, act => act.MapFrom(src => src.Orders.Count))
                .ForMember(des => des.NumberOfNotifications, act => act.MapFrom(src => src.Notifications.Count));
            CreateMap<AccountDTO, Account>();
            //Category
            CreateMap<Category, CategoryDTO>()
                .ForMember(des => des.NumberOfProductPosts, act => act.MapFrom(src => src.ProductPosts.Count))
                .ForMember(des => des.NumberOfExchangeDesires, act => act.MapFrom(src => src.ExchangeDesires.Count));
            CreateMap<CategoryDTO, Category>();
            //ExchangeDesires
            CreateMap<ExchangeDesire, ExchangeDesireDTO>()
                .ForMember(des => des.ProductName, act => act.MapFrom(src => src.Product.Name));
            CreateMap<ExchangeDesireDTO, ExchangeDesire>();
            //Notification
            CreateMap<Notification, NotificationDTO>()
                .ForMember(src => src.FullName, act => act.MapFrom(des => des.Account.FullName));
            CreateMap<NotificationDTO, Notification>();
            //Order
            CreateMap<Order, OrderDTO>()
                .ForMember(src => src.BuyerName, act => act.MapFrom(des => des.Buyer.FullName))
                .ForMember(src => src.Product1Name, act => act.MapFrom(des => des.Product.Name))
                .ForMember(src => src.Product2Name, act => act.MapFrom(des => des.Product2.Name));
            CreateMap<OrderDTO,Order>();
            //ProductPost
            CreateMap<ProductPost, ProductPostDTO>()
                .ForMember(des => des.AccountName, act => act.MapFrom(src => src.Account.FullName))
                .ForMember(des => des.NumberOfExchangeDesires, act => act.MapFrom(src => src.ExchangeDesires.Count))
                .ForMember(des => des.CategoryName, act => act.MapFrom(src => src.Category.Category1))
                .ForMember(des => des.images, act => act.MapFrom(src => src.ProductImages));
            CreateMap<ProductPostDTO, ProductPost>();
            //Payment
            CreateMap<Payment, PaymentDTO>();
            CreateMap<PaymentDTO, Payment>();

            //ProductImage
            CreateMap<ProductImage, ProductImageDTO>();
            CreateMap<ProductImageDTO, ProductImage>();

        }
    }
}
