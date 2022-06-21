using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BusinessObject.Models;
using DataAccess.Paging;
namespace DataAccess.IRepository
{
    public interface IOrderRepository
    {
        Order get(int id);
        PagedList<Order> findByUserID(int userId, PagingParams p);
        PagedList<Order> findByPrice(int minprice, int maxprice, PagingParams p);
        PagedList<Order> findByRate(int rate, PagingParams p);
        void create(Order order);
        void update(Order order);   
    }
}
