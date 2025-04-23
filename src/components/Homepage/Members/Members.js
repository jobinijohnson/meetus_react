import React, { useState, useEffect } from "react";
import { API_URL } from "../../../config/api.js";
import "./Members.scss";

function Members() {
  const [members, setMembers] = useState([]);
  const [selectedTab, setSelectedTab] = useState("Newest");

  useEffect(() => {
    fetch(`${API_URL}/api/members?populate=*`)
      .then((res) => res.json())
      .then((data) => setMembers(data.data))
      .catch((err) => console.error("Failed to fetch members", err));
  }, []);

  const tabs = ["Newest", "Active", "Popular"];
  const filteredMembers = members;

  return (
    <div className="members-section">
      <div className="members-content">Members</div>

      <div className="members-header">
        <div className="members-tabs">
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
      </div>

      <div className="members-list">
        {filteredMembers.map((item) => {
          const imageUrl = item.image?.url;
          const fullImageUrl = imageUrl ? `${API_URL}${imageUrl}` : null;

          return (
            <div key={item.id} className="member-card">
              {fullImageUrl && (
                <img className="member-avatar" src={fullImageUrl} alt={item.name} />
              )}
              <div className="member-info">
                <div className="member-name">{item.name}</div>
                <div className="member-status">{item.description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Members;
