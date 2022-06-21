using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BusinessObject.Models;
using DataAccess.Paging;
namespace DataAccess.IRepository
{
    public interface IExchangeDesireRepository
    {
        ExchangeDesire get(int id);
        PagedList<ExchangeDesire> getAllByCategory(int categoryID,PagingParams p);
        PagedList<ExchangeDesire> getAllByProduct(int productID, PagingParams p);
        void delete(int id);
        void create(ExchangeDesire exchangeDesire);
    }
}
