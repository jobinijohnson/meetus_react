import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { API_URL } from "../../../config/api.js";
import "./Awards.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AwardsIcon from "../../../assets/award.svg";
import TrophyIcon from "../../../assets/trophyImg.png";

function Awards() {
  const [awards, setAwards] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/api/awards?populate=*`)
      .then((res) => res.json())
      .then((data) => {
        setAwards(data.data);
      })
      .catch((err) => console.error("Failed to fetch awards", err));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <div className="awards-wrapper">
      <div className="awards-header">
        <div className="awards-icon"><img src={AwardsIcon} alt="awardsIcon" /></div>
        <h2 className="awards-title">Awards</h2>
      </div>

      <div className="awards-subheader">
        <div>
          <div className="subheader-text">BEST PERFORMERS</div>
          <div className="subheader-subtext">OF THE MONTH</div>
        </div>
        <span className="trophy-icon"><img src={TrophyIcon} alt="trophyIcon" /></span>
      </div>

      <Slider {...settings} className="awards-slider">
        {awards.map((item) => {
          const imageUrl = item.image?.url;
          const fullImageUrl = imageUrl ? `${API_URL}${imageUrl}` : null;
          return (
            <div key={item.id} className="slider-item">
              <div className="award-card">
                <div className="confetti" />
                <div className="crown">👑</div>
                <div className="profile-img-wrapper">
                  <img
                    src={fullImageUrl}
                    alt={item.name}
                    className="profile-img"
                  />
                </div>
                <div className="profile-info">
                  <div className="name">{item.name}</div>
                  <div className="position">{item.position}</div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Awards;
