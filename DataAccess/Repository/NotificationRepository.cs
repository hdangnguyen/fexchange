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
    public class NotificationRepository : INotificationRepository
    {
        public void create(Notification notification)
        {
            EntityDAO.Instance.context.Notifications.Add(notification);
            EntityDAO.Instance.context.SaveChanges();
        }

        public void delete(Notification notification)
        {
            EntityDAO.Instance.context.Notifications.Remove(notification);
            EntityDAO.Instance.context.SaveChanges();
        }

        public Notification get(int id)
        {
            return EntityDAO.Instance.context.Notifications
                .Include(x=> x.Account)
                .FirstOrDefault(x=>x.Id == id);
        }

        public PagedList<Notification> getNotifications(int accountID,PagingParams p)
        {
            return new PagedList<Notification>
                (
                EntityDAO.Instance.context.Notifications
                .Include(x => x.Account)
                .Where(x => x.AccountId == accountID),
                p.PageNumber, p.PageSize
                );
        }

        public void update(Notification notification)
        {
            EntityDAO.Instance.context.Notifications.Attach(notification);
            EntityDAO.Instance.context.SaveChanges();
        }
    }
}
