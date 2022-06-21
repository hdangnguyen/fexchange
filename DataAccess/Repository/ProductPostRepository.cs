using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BusinessObject.Models;
using DataAccess.IRepository;
using DataAccess.DAO;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;
using DataAccess.Paging;

namespace DataAccess.Repository
{
    public class ProductPostRepository : IProductPostRepository
    {
        public void create(ProductPost productPost)
        {
            EntityDAO.Instance.context.ProductPosts.Add(productPost);
            EntityDAO.Instance.context.SaveChanges();
        }
        public PagedList<ProductPost> findAll(int pageNumber, int pageSize)
        {
            return new PagedList<ProductPost>(
                    EntityDAO.Instance.context.ProductPosts
                    .Include(x => x.Account)
                    .Include(x => x.Category)
                    .Include(x => x.ExchangeDesires)
                    , pageNumber,pageSize);
        }
        public void delete(int id)
        {
            ProductPost productPost = get(id);
            productPost.Status = "Inactive";
            EntityDAO.Instance.context.ProductPosts.Update(productPost);
            EntityDAO.Instance.context.SaveChanges();
        }

        public PagedList<ProductPost> findByAccountID(int accountID, int pageNumber, int pageSize)
            => new PagedList<ProductPost>(
                EntityDAO.Instance.context.ProductPosts
                    
                    .Where(x=> x.AccountId == accountID)
                    .Include(x => x.Account)
                    .Include(x => x.Category)
                    .Include(x => x.ExchangeDesires)
                ,
                pageNumber, pageSize);
                

        public PagedList<ProductPost> findByCategoryID(int categoryID, int pageNumber, int pageSize)
                => new PagedList<ProductPost>(
                EntityDAO.Instance.context.ProductPosts
                    .Include(x => x.Account)
                    .Include(x => x.Category.Category1)
                    .Include(x => x.ExchangeDesires.Count)
                    .Where(x=> x.CategoryId == categoryID)
                    ,
                pageNumber, pageSize);

        public ProductPost get(int id)
        {
            return EntityDAO.Instance.context.ProductPosts
                .Include(x => x.Account)
                    .Include(x => x.Category)
                    .Include(x => x.ExchangeDesires)
                .FirstOrDefault(x=>x.Id == id);
        }

        public void update(ProductPost productPost)
        {
           
            EntityDAO.Instance.context.ProductPosts.Update(productPost);
            EntityDAO.Instance.context.SaveChanges();
        }
    }
}
