import  { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import eventsData from '../assets/event.json';

function EventsPage() {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [category, setCategory] = useState('');
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 5;

  useEffect(() => {
    setEvents(eventsData);
    setFilteredEvents(eventsData);
  }, []);

  const handleFilter = () => {
    const result = events.filter(
      (event) =>
        event.category.includes(category) &&
        event.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredEvents(result);
  };

  const paginatedEvents = useMemo(() => {
    const startIndex = (currentPage - 1) * eventsPerPage;
    return filteredEvents.slice(startIndex, startIndex + eventsPerPage);
  }, [filteredEvents, currentPage]);

  return (
    <div>
      <h1>Events</h1>
      <input type="text" placeholder="Search by title" onChange={(e) => setSearch(e.target.value)} />
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="">All Categories</option>
        <option value="Music">Music</option>
        <option value="Sports">Sports</option>
      </select>
      <button onClick={handleFilter}>Filter</button>
      <ul>
        {paginatedEvents.map((event) => (
          <li key={event.id}>
            <Link to={`/events/${event.id}`}>{event.title}</Link>
            <p>{event.description}</p>
          </li>
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredEvents.length / eventsPerPage)}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

function Pagination({ currentPage, totalPages, setCurrentPage }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <div>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          disabled={currentPage === page}
        >
          {page}
        </button>
      ))}
    </div>
  );
}

export default EventsPage;