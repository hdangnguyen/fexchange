using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BusinessObject.Models;

namespace DataAccess.IRepository
{
    public interface IPaymentRepository
    {
        Payment get(int orderID);
        void create(Payment payment);
        void update(Payment payment);
    }
}
