using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using BusinessObject.Models;
namespace DataAccess.IRepository
{
    public interface IProductImageRepository
    {
        void create(ProductImage productImage);
        void update(ProductImage productImage);
        IEnumerable<ProductImage> GetAll(Expression<Func<ProductImage,bool>> ex);
        void delete(int id);
        ProductImage get(int id);   
    }
}
