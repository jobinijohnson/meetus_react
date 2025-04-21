import React, { useState, useEffect } from "react";
import { API_URL } from '../../../config/api.js';
import './Notification.scss';
import Notify from "../../../assets/notifyIcon.png";
import Dismiss from "../../../assets/dismissIcon.svg";

function Notification() {
  const [notify, setNotify] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/api/notifications`)
      .then(res => res.json())
      .then(data => {
        setNotify(data.data || []); 
      })
      .catch(err => console.error("Failed to fetch notifications", err));
  }, []);

  return (
    <div className="notification-section">
      {notify.length === 0 ? (
        <p>No notifications yet.</p>
      ) : (
        notify.map((item) => (
          <div key={item.id} className="notify-section">
            <div className="notify-imgsection"><img className="notify-imgcontent" src={Notify} alt="notify"/></div>
            <div className="title-content">{item.title}</div>
            <div className="dismiss-imgcontent"><img src={Dismiss} alt="dismiss" /></div>
          </div>
        ))
      )}
    </div>
  );
}

export default Notification;
