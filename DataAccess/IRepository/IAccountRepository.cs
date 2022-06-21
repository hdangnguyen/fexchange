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
    public interface IAccountRepository
    {
        Account checkLogin(string gmail);
        PagedList<Account> findAll(Expression<Func<Account, bool>> ex, PagingParams pagingParams);
        void create(Account account);
        void update(Account account);
        Account findById(int id);   
    }
}
