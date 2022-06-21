using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BusinessObject.Models;
using DataAccess.Paging;
namespace DataAccess.IRepository
{
    public interface INotificationRepository
    {
        Notification get(int id);
        PagedList<Notification> getNotifications(int accountID,PagingParams p);
        void create(Notification notification);
        void update(Notification notification);
        void delete(Notification notification);
    }
}
