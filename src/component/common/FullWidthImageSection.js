import React from 'react';
import LazyLoad from 'react-lazyload';
import './index.css';  // Include your custom styles here

const FullWidthImageSection = ({ image, styles = {} }) => {
  return (
    <div className="container-fluid p-0">
      {/* Lazy loading the image with a 300px offset */}
      {/* <LazyLoad height={400} offset={300} placeholder={<div className="image-placeholder" />}> */}
        <img src={image} className="img-fluid full-main-image" style={styles} alt="mythos media client" />
      {/* </LazyLoad> */}
    </div>
  );
};

export default FullWidthImageSection;
