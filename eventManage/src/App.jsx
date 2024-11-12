

import React, { useState, useEffect, createContext } from "react";
import EventList from "./components/EventList";
import EventDetail from "./components/EventDetail"
import Login from "./components/Login"
import eventsData from "../src/assets/event.json";
import "./App.css";

//for authentication
export const AuthContext = createContext();

const App = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Data fetching
    setTimeout(() => setEvents(eventsData), 1000);
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <div className="app">
        {isLoggedIn ? (
          <>
            {selectedEvent ? (
              <EventDetail event={selectedEvent} setSelectedEvent={setSelectedEvent} />
            ) : (
              <EventList events={events} setSelectedEvent={setSelectedEvent} />
            )}
          </>
        ) : (
          <Login />
        )}
      </div>
    </AuthContext.Provider>
  );
};

export default App;
