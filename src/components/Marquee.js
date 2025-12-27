import React from "react";
import "../styles/Marquee.css";

const Marquee = ({ images = [] }) => {
  return (
    <div className="marquee-container" aria-label="Technology stack marquee">
      {/* Remove container-fluid padding */}
      <div className="marquee-wrapper">
        <div className="marquee">
          {images.map((image, index) => (
            <div className="marquee-item" key={index}>
              <img
                src={image}
                alt={`Technology logo ${index + 1}`}
                className="marquee-image"
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
