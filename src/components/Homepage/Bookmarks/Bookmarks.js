import React, { useState, useEffect } from "react";
import { API_URL } from "../../../config/api.js";
import { FaQuoteLeft } from "react-icons/fa";
import "./Bookmarks.scss";

function Bookmarks() {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/api/bookmarks?populate=*`)
      .then((res) => res.json())
      .then((data) => {
        setBookmarks(data.data);
      })
      .catch((err) => console.error("Failed to fetch businesses", err));
  }, []);

  return (
    <div className="bookmarks-section">
      {bookmarks.map((item) => {
        const imageUrl = item.image?.url;
        const fullImageUrl = imageUrl ? `${API_URL}${imageUrl}` : null;

        return (
          <div key={item.id}>
            <div className="display-content">
              {fullImageUrl && (
                <img
                  src={fullImageUrl}
                  alt={item.name}
                />
              )}
              <div className="content-section">
                <div className="name-content">{item.name}</div>
                <div className="desc-content">{item.designation}</div>
              </div>
            </div>
            <div className="quote-content">{item.quote}</div>
            <div className="quote-section">
              <FaQuoteLeft className="quote-icon" />
              <div className="quotecomma-content"> grove right at <br />the coast of the</div>
            </div>

            <div className="read-more">Read more ↗</div>
          </div>
        );
      })}
    </div>
  );
}

export default Bookmarks;
