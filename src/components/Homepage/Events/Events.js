import React, { useState, useEffect } from "react";
import { API_URL } from "../../../config/api.js";
import "./Events.scss";

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/api/events?populate=*`)
      .then((res) => res.json())
      .then((data) => setEvents(data.data))
      .catch((err) => console.error("Failed to fetch members", err));
  }, []);

  return (
    <div className="events-section">
      <div className="events-content">Upcoming Event</div>
      <hr />
      <div className="events-list">
        {events.map((item) => {
          const imageUrl = item.image?.url;
          const fullImageUrl = imageUrl ? `${API_URL}${imageUrl}` : null;

          return (
            <div key={item.id} className="event-card">
              {fullImageUrl && (
                <img className="event-avatar" src={fullImageUrl} alt={item.name} />
              )}
              <div className="event-info">
                <div className="event-name">{item.title}</div>
                <div className="event-status">{item.location}</div>
                <div className="event-amount">{item.amount}</div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="view-all">View all <span>↗</span></div>
    </div>
  );
}

export default Events;
