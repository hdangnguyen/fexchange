using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using BusinessObject.Models;
using DataAccess.Paging;

namespace DataAccess.IRepository
{
    public interface ICategoryRepository
    {
        Category get(int id);
        PagedList<Category> getAll(Expression<Func<Category, bool>> ex, PagingParams p);
        void update(Category category);
        void create(Category category);
    }
}
