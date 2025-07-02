import { Box, Container } from '@mui/material'
import React from 'react'
const events = [
  {
    id: 1,
    title: "Spring Collection Launch",
    date: "April 15, 2025",
    location: "Seoul Flagship Store",
    image: "/home/best.jpeg",
    description: "Join us for an exclusive preview of our Spring '25 collection featuring timeless gold designs and sparkling gemstones.",
  },
  {
    id: 2,
    title: "Pop-up Event in Paris",
    date: "May 5–10, 2025",
    location: "Galeries Lafayette, Paris",
    image: "/images/event2.jpg",
    description: "Experience our limited-time pop-up showcasing handcrafted fine jewelry in the heart of Paris.",
  },
  {
    id: 3,
    title: "Private Styling Session",
    date: "June 1, 2025",
    location: "Online Event",
    image: "/images/event3.jpg",
    description: "Book a 1-on-1 virtual styling appointment with our creative team and personalize your perfect jewelry set.",
  },
];
const Events = () => {
  return (
 <div className="Event_frame">
  <Container>
   <Box>
      <h2 className="events-title">Upcoming Events</h2>
      <p className="events-subtitle">
        Discover the latest happenings and exclusive experiences by our brand.
      </p>
   </Box>
   <div className="events-list">
        {events.map((event) => (
          <div className="event-card" key={event.id}>
            <img src={event.image} alt={event.title} className="event-image" />
            <div className="event-info">
              <h2 className="event-title">{event.title}</h2>
              <p className="event-meta">
                📍 {event.location} | 📅 {event.date}
              </p>
              <p className="event-description">{event.description}</p>
              <button className="event-btn">Learn More</button>
            </div>
          </div>
        ))}
      </div>
  </Container>
 </div>
  )
}

export default Events