using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BusinessObject.Models;
using DataAccess.Paging;
namespace DataAccess.IRepository
{
    public interface IProductPostRepository
    {
        ProductPost get(int id);
        PagedList<ProductPost> findByAccountID(int accountID, int pageNumber, int pageSize);
        PagedList<ProductPost> findByCategoryID(int categoryID, int pageNumber, int pageSize);
        PagedList<ProductPost> findAll(int pageNumber, int pageSize);
        void create(ProductPost productPost);
        void update(ProductPost productPost);
        void delete(int id);
        int getMax();
    }
}
