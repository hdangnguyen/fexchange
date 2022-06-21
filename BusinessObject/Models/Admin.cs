using System;
using System.Collections.Generic;

#nullable disable

namespace BusinessObject.Models
{
    public partial class Admin
    {
        public int Id { get; set; }
        public string Gmail { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
    }
}
