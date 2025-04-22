import React, { useState, useEffect } from "react";
import { API_URL } from "../../../config/api.js";
import "./Birthday.scss";

function Birthday() {
  const [birthday, setBirthday] = useState([]);
  const [birthdaySection, setBirthdaySection] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/api/birthdays?populate=*`)
      .then((res) => res.json())
      .then((data) => setBirthday(data.data))
      .catch((err) => console.error("Failed to fetch birthday", err));
  }, []);

  useEffect(() => {
    fetch(`${API_URL}/api/birthday-sections?populate=*`)
      .then((res) => res.json())
      .then((data) => setBirthdaySection(data.data))
      .catch((err) => console.error("Failed to fetch birthday-section", err));
  }, []);

  return (
    <div className="birthday-section">
      <div className="bday-section">
        {birthday.map((item) => {
          const fullImageUrl = item.image?.url ? `${API_URL}${item.image.url}` : null;
          return (
            <div className="birthday-imgsection" key={item.id}>
              {fullImageUrl && (
                <img src={fullImageUrl} alt={item.name} className="bday-imgcontent" />
              )}
              <div className="title-content">
                Happy birthday, <span className="bold-name">{item.title}</span>
              </div>
              <div className="desc-content">{item.description}</div>
              <button className="greet-btn">Send Greeting 🎉</button>
            </div>
          );
        })}
      </div>

      <div className="bdaysection-content">
        <div className="section-header">
          <div className="header-title">Upcoming Birthdays</div>
          <div className="view-all">View all <span>↗</span></div>
        </div>
        <hr />
        <div className="birthday-list">
          {birthdaySection.map((item) => {
            const fullImageUrl = item.image?.url ? `${API_URL}${item.image.url}` : null;
            return (
              <div className="display-content" key={item.id}>
                {fullImageUrl && (
                  <img src={fullImageUrl} alt={item.name} className="bdaysec-imgcontent" />
                )}
                <div className="bdaycontent-section">
                  <div className="name-content">{item.name}</div>
                  <div className="desc-content">{item.birthdayDate}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Birthday;
