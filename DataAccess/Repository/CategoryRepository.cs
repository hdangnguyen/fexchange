using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BusinessObject.Models;
using DataAccess.IRepository;
using DataAccess.DAO;
using Microsoft.EntityFrameworkCore;
using DataAccess.Paging;
using System.Linq.Expressions;

namespace DataAccess.Repository
{
    public class CategoryRepository : ICategoryRepository
    {
        public void create(Category category)
        {
            EntityDAO.Instance.context.Categories.Add(category);
            EntityDAO.Instance.context.SaveChanges();
        }

        public Category get(int id)
        {
            return EntityDAO.Instance.context.Categories
                .Include(x=> x.ExchangeDesires)
                .Include(x=> x.ProductPosts)
                .FirstOrDefault(x=> x.Id == id);
                
        }

        public PagedList<Category> getAll(Expression<Func<Category, bool>> ex,PagingParams p)
        {
            if (ex !=null) 
                return new PagedList<Category>
                (
                    EntityDAO.Instance.context.Categories
                            .Include(x => x.ExchangeDesires)
                            .Include(x => x.ProductPosts)
                            .Where(ex),
                            p.PageNumber, p.PageSize
                );
            else
            {
                return new PagedList<Category>
                (
                    EntityDAO.Instance.context.Categories
                            .Include(x => x.ExchangeDesires)
                            .Include(x => x.ProductPosts),
                            p.PageNumber, p.PageSize
                );
            }
        }

        public void update(Category category)
        {
            EntityDAO.Instance.context.Categories.Update(category);
            EntityDAO.Instance.context.SaveChanges();
        }
    }
}
