using System;
using System.Collections.Generic;

#nullable disable

namespace ReactAPI.Models
{
    public partial class Recipe
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Image { get; set; }
        public string Description { get; set; }
        public int PrepTime { get; set; }
        public int CookTime { get; set; }
        public string Ingredients { get; set; }
        public string Tools { get; set; }
        public int CategoryId { get; set; }

        public virtual Category Category { get; set; }
    }
}
