using System;
using System.Collections.Generic;

#nullable disable

namespace BusinessObject.Models
{
    public partial class Category
    {
        public Category()
        {
            ExchangeDesires = new HashSet<ExchangeDesire>();
            ProductPosts = new HashSet<ProductPost>();
        }

        public int Id { get; set; }
        public string Category1 { get; set; }

        public virtual ICollection<ExchangeDesire> ExchangeDesires { get; set; }
        public virtual ICollection<ProductPost> ProductPosts { get; set; }
    }
}
