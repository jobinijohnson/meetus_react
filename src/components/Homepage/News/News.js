import React, { useState, useEffect } from "react";
import { API_URL } from "../../../config/api.js";
import "./News.scss";
import NewsUpdate from "../../../assets/newsUpdate.png";

function News() {
  const [newsUpdates, setNewsUpdates] = useState([]);
  const [newsFeeds, setNewsFeeds] = useState([]);
  const [selectedTab, setSelectedTab] = useState("All");

  useEffect(() => {
    fetch(`${API_URL}/api/newsupdates?populate=*`)
      .then((res) => res.json())
      .then((data) => setNewsUpdates(data.data))
      .catch((err) => console.error("Failed to fetch news updates", err));
  }, []);

  useEffect(() => {
    fetch(`${API_URL}/api/newsfeeds?populate=*`)
      .then((res) => res.json())
      .then((data) => setNewsFeeds(data.data))
      .catch((err) => console.error("Failed to fetch news feeds", err));
  }, []);

  const tabs = ["All", "Company Update", "News and Trends", "Tips"];

  return (
    <div className="news-section">
      <div className="news-content">News</div>
      <div className="news-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab-button ${selectedTab === tab ? "active" : ""}`}
            onClick={() => setSelectedTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="newsfeed-section">
        <div className="newsfirst-section">
          <div className="main-image">
            <img src={NewsUpdate} alt="newsUpdate" />
          </div>
          {newsUpdates.map((item) => (
            <div className="main-news-content" key={item.id}>
              <div className="read-time">• {item.readTime}</div>
              <div className="title">{item.title}</div>
              <div className="description">{item.description}</div>
            </div>
          ))}
        </div>
        <div className="side-news-section">
          {newsFeeds.map((item) => (
            <div className="side-news-card" key={item.id}>
              <div className="read-time">• {item.readTime}</div>
              <div className="title">{item.title}</div>
              <div className="date">{item.newsDate}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default News;
