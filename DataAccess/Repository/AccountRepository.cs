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
    public class AccountRepository : IAccountRepository
    {
        public Account checkLogin(string gmail)
        {
            return EntityDAO.Instance.context.Accounts
                .Include(x => x.Notifications)
                .Include(x => x.ProductPosts)
                .Include(x => x.Orders)
                .FirstOrDefault(x => x.Gmail == gmail);
        }

        public void create(Account account)
        {
            EntityDAO.Instance.context.Accounts.Add(account);
            EntityDAO.Instance.context.SaveChanges();
        }

        public PagedList<Account> findAll(Expression<Func<Account, bool>> expression,PagingParams pagingParams)
        {
            IEnumerable<Account> accounts= EntityDAO.Instance.context.Accounts
                .Include(x => x.Notifications)
                .Include(x => x.ProductPosts)
                .Include(x => x.Orders)
                .Where(expression);
            return new PagedList<Account>(accounts.AsQueryable(),pagingParams.PageNumber,pagingParams.PageSize);
        }

        public Account findById(int id)
        {
            return EntityDAO.Instance.context.Accounts
                .Include(x => x.Notifications)
                .Include(x => x.ProductPosts)
                .Include(x => x.Orders)
                .FirstOrDefault(x => x.Id == id);
        } 
        public void update(Account account)
        {
            
            FExchangeContext context = EntityDAO.Instance.context;
            context.Update(account);
            context.SaveChanges();
        }
    }
}
