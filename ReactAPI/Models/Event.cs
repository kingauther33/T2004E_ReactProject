using System;
using System.Collections.Generic;

#nullable disable

namespace ReactAPI.Models
{
    public partial class Event
    {
        public Event()
        {
            EventComments = new HashSet<EventComment>();
        }

        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }
        public string Content { get; set; }
        public string Organizer { get; set; }
        public string Location { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }

        public virtual ICollection<EventComment> EventComments { get; set; }
    }
}
