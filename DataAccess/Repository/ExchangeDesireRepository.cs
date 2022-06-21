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
namespace DataAccess.Repository
{
    public class ExchangeDesireRepository : IExchangeDesireRepository
    {
        public void create(ExchangeDesire exchangeDesire)
        {
            EntityDAO.Instance.context.ExchangeDesires.Add(exchangeDesire);
            EntityDAO.Instance.context.SaveChanges();
        }

        public void delete(int id)
        {
            EntityDAO.Instance.context.ExchangeDesires.Remove(get(id));
            EntityDAO.Instance.context.SaveChanges();   
        }

        public ExchangeDesire get(int id)
        {
            return EntityDAO.Instance.context.ExchangeDesires
                .Include(x=> x.Category)
                .Include(x=> x.Product)
                .FirstOrDefault(d => d.Id == id);
        }

        public PagedList<ExchangeDesire> getAllByCategory(int categoryID, PagingParams p)
        {
            return new PagedList<ExchangeDesire>(EntityDAO.Instance.context.ExchangeDesires
                .Include(x => x.Category)
                .Include(x => x.Product)
                .Where(x => x.CategoryId == categoryID),
                p.PageNumber, p.PageSize
                );
        }

        public PagedList<ExchangeDesire> getAllByProduct(int productID, PagingParams p)
        {
            return new PagedList<ExchangeDesire>
                (
                    EntityDAO.Instance.context.ExchangeDesires
                        .Include(x => x.Category)
                        .Include(x => x.Product)
                        .Where(x => x.CategoryId == productID),
                    p.PageNumber, p.PageSize
                );
        }
    }
}
