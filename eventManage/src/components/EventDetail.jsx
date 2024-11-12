
import React, { useState, useContext } from "react";
import { AuthContext } from "../App";

const EventDetail = ({ event, setSelectedEvent }) => {
  const { isLoggedIn } = useContext(AuthContext);
  const [seats, setSeats] = useState(event.seats);

  const handleBooking = () => {
    if (seats > 0) {
      setSeats(seats - 1);
      alert("Ticket booked successfully!");
    } else {
      alert("Sorry, this event is fully booked.");
    }
  };



  return (
    <div className="event-detail">
      
      <h2>{event.title}</h2>
      <p>{event.description}</p>
      <p>Date: {event.date}</p>
      <p>Category: {event.category}</p>
      <p>Seats Available: {seats}</p>
      <p>Price: ${event.price}</p>
      <div id="detailbutton">
      {isLoggedIn && (
        <button className="butt" onClick={handleBooking} disabled={seats <= 0 }>
          Book Ticket
        </button>
      )} &nbsp;
      <button className="butt" onClick={() => setSelectedEvent(null)}>Back to Events</button>
      </div>
    </div>
    
  );
};

export default EventDetail;