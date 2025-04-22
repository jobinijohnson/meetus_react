import React, { useState, useEffect } from "react";
import { API_URL } from "../../../config/api.js";
import "./UsefulTools.scss";

function UsefulTools() {
  const [usefulTools, setUsefulTools] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/api/useful-tools?populate=*`)
      .then((res) => res.json())
      .then((data) => {
        setUsefulTools(data.data);
      })
      .catch((err) => console.error("Failed to fetch businesses", err));
  }, []);

  return (
    <div className="usefulTools-section">
      <div className="useful-content">Useful Tools</div>
      <hr className="divider" />

      <div className="grid-container">
        {usefulTools.map((item) => {
          const imageUrl = item.image?.url;
          const fullImageUrl = imageUrl ? `${API_URL}${imageUrl}` : null;
          return (
            <div className="tool-card" key={item.id}>
              {fullImageUrl && (
                <img
                  src={fullImageUrl}
                  alt={item.name}
                  className="tool-icon"
                />
              )}
              <div className="tool-title">{item.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UsefulTools;
