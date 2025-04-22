import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { API_URL } from '../../../config/api.js'; 
import './BusinessSlider.scss';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function BusinessSlider() {
  const [business, setBusiness] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/api/businesses?populate=*`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched business data:", data); 
        setBusiness(data.data);
      })
      .catch((err) => console.error("Failed to fetch businesses", err));
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <div className="businessSlider-section">
      <Slider {...settings}>
        {business.map((item) => {
          const imageUrl = item.image?.formats?.large?.url;
          const fullImageUrl = imageUrl ? `${API_URL}${imageUrl}` : null;
          return (
            <div key={item.id} className="slider-item">
              <img src={fullImageUrl} alt={item.title} style={{ width: '100%', height: 'auto', objectFit: 'cover' }}/>
              <div className="slider-content">
                <div className="category-content">{item.category}</div>
                <div className="title-content">{item.title}</div>
                <div className="desc-content" data-full={item.description}>{item.description}</div>
                <div className="date-content">{item.date}</div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default BusinessSlider;
