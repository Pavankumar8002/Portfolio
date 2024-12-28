import React from 'react';
import '../styles/Marquee.css';


const Marquee = ({ images }) => {
  return (
    <div className="marquee-container">
      <div className="marquee d-flex">
        {images.map((image, index) => (
          <div className="marquee-item" key={index}>
            <img src={image} alt={`Marquee Image ${index}`} className="marquee-image img-fluid" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
