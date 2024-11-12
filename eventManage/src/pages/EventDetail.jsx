import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import eventsData from '../assets/event.json';
import { AuthContext } from '../App';

function EventDetail() {
  const { id } = useParams();
  const { isAuthenticated } = useContext(AuthContext);
  const [events, setEvents] = useState(eventsData);
  const event = events.find((event) => event.id === parseInt(id));

  const handleBooking = () => {
    if (event.availableSeats > 0) {
      setEvents((prevEvents) =>
        prevEvents.map((evt) =>
          evt.id === event.id
            ? { ...evt, availableSeats: evt.availableSeats - 1 }
            : evt
        )
      );
      alert('Ticket booked successfully!');
    } else {
      alert('Event is fully booked!');
    }
  };

  return (
    <div>
      <h2>{event.title}</h2>
      <p>{event.description}</p>
      <p>Category: {event.category}</p>
      <p>Date: {event.date}</p>
      <p>Price: ${event.price}</p>
      <p>Available Seats: {event.availableSeats}</p>
      {isAuthenticated && (
        <button onClick={handleBooking}>
          {event.availableSeats > 0 ? 'Book Ticket' : 'Fully Booked'}
        </button>
      )}
    </div>
  );
}

export default EventDetail;