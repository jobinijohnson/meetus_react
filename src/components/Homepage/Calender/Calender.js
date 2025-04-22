import React, { useState } from "react";
import "./Calender.scss";
import calendarImage from "../../../assets/calender.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

function CalenderSection() {
  const [selectedDate, setSelectedDate] = useState(15);
  const daysInMonth = 31;
  const forcedStartOffset = 3;
  const calendarDays = [];

  for (let i = 0; i < forcedStartOffset; i++) {
    calendarDays.push(null);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i);
  }

  return (
    <div className="calendar-section">
      <img src={calendarImage} alt="Team working" className="calendar-image" />

      <div className="calendar-container">
        <div className="calendar-header">
          <button className="nav-arrow">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <div className="date-content">March 2024</div>
          <button className="nav-arrow">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
        <hr />
        <div className="calendar-grid">
          {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
            <div key={day} className="calendar-day">
              {day}
            </div>
          ))}
          {calendarDays.map((day, index) => {
            const isPastDate = day && day < selectedDate;
            const isSelected = day === selectedDate;

            return (
              <div
                key={index}
                className={`calendar-date ${
                  isSelected ? "selected" : ""
                } ${!day ? "empty" : ""} ${
                  isPastDate && !isSelected ? "past-date" : ""
                }`}
                onClick={() => day && setSelectedDate(day)}
              >
                {day || ""}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CalenderSection;
