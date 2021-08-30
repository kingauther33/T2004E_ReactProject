using System;
using System.Collections.Generic;

#nullable disable

namespace ReactAPI.Models
{
    public partial class Category
    {
        public Category()
        {
            Recipes = new HashSet<Recipe>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Image { get; set; }

        public virtual ICollection<Recipe> Recipes { get; set; }
    }
}
