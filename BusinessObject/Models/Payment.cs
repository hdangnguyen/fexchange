using System;
using System.Collections.Generic;

#nullable disable

namespace BusinessObject.Models
{
    public partial class Payment
    {
        public int Id { get; set; }
        public int? OrderId { get; set; }
        public double? Amount { get; set; }
        public double? BeanBefore { get; set; }
        public double? BeanAfter { get; set; }

        public virtual Order Order { get; set; }
    }
}
