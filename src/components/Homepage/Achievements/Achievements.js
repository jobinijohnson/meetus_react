import React, { useState, useEffect } from "react";
import { API_URL } from "../../../config/api.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faAward, faMessage } from "@fortawesome/free-solid-svg-icons";
import "./Achievements.scss";

const iconMap = {
  MEMBERS: faSun,
  AWARDS: faAward,
  FORUMS: faMessage,
};

function Achievements() {
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/api/achievements?populate=*`)
      .then((res) => res.json())
      .then((data) => {
        setAchievements(data.data);
      })
      .catch((err) => console.error("Failed to fetch achievements", err));
  }, []);

  return (
    <div className="achievements-section">
      {achievements.map((item) => {
        const title = item.title.toUpperCase();
        const icon = iconMap[title] || faAward;
        return (
          <div key={item.id} className={`achievement-card ${title.toLowerCase()}`}>
            <FontAwesomeIcon icon={icon} className="achievement-icon" />
            <div className="achievement-count">{item.count}</div>
            <div className="achievement-title">{title}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Achievements;
