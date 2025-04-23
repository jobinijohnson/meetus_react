import React, { useState, useEffect } from "react";
import { API_URL } from "../../../config/api.js";
import "./Poll.scss";

function Poll() {
  const [poll, setPoll] = useState([]);
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/api/polls?populate=*`)
      .then((res) => res.json())
      .then((data) => setPoll(data.data))
      .catch((err) => console.error("Failed to fetch poll", err));
  }, []);

  useEffect(() => {
    fetch(`${API_URL}/api/options?populate=*`)
      .then((res) => res.json())
      .then((data) => setOptions(data.data))
      .catch((err) => console.error("Failed to fetch options", err));
  }, []);

  const handleVote = () => {
    if (selectedOption) {
      console.log("Voted for option ID:", selectedOption);
      // Optionally, post to API here
    }
  };

  return (
    <div className="poll-section">
      <div className="poll-content">Poll</div>
      <hr />
      <div>
        {poll.map((item) => (
          <div key={item.id}>
            <div className="title-name">{item.title}</div>
          </div>
        ))}
      </div>
      <form>
        {options.map((item) => (
          <label className="radio-option" key={item.id}>
            <input
              type="radio"
              name="pollOption"
              value={item.id}
              onChange={() => setSelectedOption(item.id)}
              checked={selectedOption === item.id}
            />
            <span className="option-content">{item.title}</span>
          </label>
        ))}
      </form>
      <button className="vote-button" onClick={handleVote} disabled={!selectedOption}>
        Vote
      </button>
    </div>
  );
}

export default Poll;
