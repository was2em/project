// EventList.js
import React, { useState } from 'react';

const EventList = ({ events, onLogout }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredEvents, setFilteredEvents] = useState(events);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const filtered = events.filter(event =>
      event.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredEvents(filtered);
  };

  const handleBookTicket = (eventId) => {
    setFilteredEvents((prevEvents) =>
      prevEvents.map(event =>
        event.id === eventId
          ? { ...event, availableSeats: event.availableSeats - 1 }
          : event
      )
    );
  };

  return (
    <div>
      <button onClick={onLogout}>Logout</button>
      <input
        type="text"
        placeholder="Search events"
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {filteredEvents.map(event => (
          <li key={event.id}>
            <h2>{event.title}</h2>
            <p>{event.description}</p>
            <p>Category: {event.category}</p>
            <p>Date: {event.date}</p>
            <p>Available Seats: {event.availableSeats}</p>
            <p>Price: ${event.price}</p>
            <button
              onClick={() => handleBookTicket(event.id)}
              disabled={event.availableSeats === 0}
            >
              Book Ticket
            </button>
            {event.availableSeats === 0 && <p>Fully booked</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;