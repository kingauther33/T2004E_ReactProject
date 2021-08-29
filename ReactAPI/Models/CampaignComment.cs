using System;
using System.Collections.Generic;

#nullable disable

namespace ReactAPI.Models
{
    public partial class CampaignComment
    {
        public int Id { get; set; }
        public string Comment { get; set; }
        public int Rating { get; set; }
        public DateTime CreatedAt { get; set; }
        public int CampaignId { get; set; }
        public int UserId { get; set; }

        public virtual Campaign Campaign { get; set; }
        public virtual User User { get; set; }
    }
}
