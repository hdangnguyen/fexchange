using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BusinessObject.Models;
namespace DataAccess.DAO
{
    public class EntityDAO
    {
        private static EntityDAO instance;
        public readonly FExchangeContext context;
        private static readonly object instanceLock = new object();
        public EntityDAO(FExchangeContext fExchangeContext)
        {
            this.context = fExchangeContext;
        }
        public static EntityDAO Instance
        {
            get
            {
                lock (instanceLock)
                {
                    if (instance == null) instance = new EntityDAO( new FExchangeContext());
                }
                return instance;
            }
        }

    }
}
