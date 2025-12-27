import React from "react";
import "../styles/Marquee.css";

const Marquee = ({ images = [] }) => {
  return (
    <div className="marquee-container overflow-hidden">
      <div className="container-fluid">
        <div
          className="marquee d-flex align-items-center"
          aria-label="Technology stack marquee"
        >
          {images.map((image, index) => (
            <div
              className="marquee-item flex-shrink-0 text-center"
              key={index}
            >
              <img
                src={image}
                alt={`Technology logo ${index + 1}`}
                className="marquee-image img-fluid"
                loading="lazy"
                draggable="false"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
