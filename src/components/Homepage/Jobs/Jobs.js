import React, { useState, useEffect } from "react";
import { API_URL } from "../../../config/api.js";
import "./Jobs.scss";

function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/api/jobs?populate=*`)
      .then((res) => res.json())
      .then((data) => setJobs(data.data))
      .catch((err) => console.error("Failed to fetch news updates", err));
  }, []);

  return (
    <div className="jobs-section">
      <div className="jobs-content">Jobs</div>
        <div className="newsfeed-section">
          {jobs.map((item) => (
            <div key={item.id}>
              <div className="main-news-content">
                <div className="first-section">
                  <div className="title-content">{item.title}</div>
                  <div className="company-title">{item.company}</div>
                </div>
                <div className="location-content">{item.location}</div>
                <div className="last-section">
                  <div className="type-content">{item.type}</div>
                  <div className="date-content">{item.postedDate}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
}

export default Jobs;
