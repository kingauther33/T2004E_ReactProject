using System;
using System.Collections.Generic;

#nullable disable

namespace ReactAPI.Models
{
    public partial class Campaign
    {
        public Campaign()
        {
            CampaignComments = new HashSet<CampaignComment>();
        }

        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }
        public string Content { get; set; }
        public double TotalDonation { get; set; }
        public string Sponsor { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }

        public virtual ICollection<CampaignComment> CampaignComments { get; set; }
    }
}
