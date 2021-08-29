using System;
using System.Collections.Generic;

#nullable disable

namespace ReactAPI.Models
{
    public partial class ConnectedBrand
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public byte[] Image { get; set; }
    }
}
