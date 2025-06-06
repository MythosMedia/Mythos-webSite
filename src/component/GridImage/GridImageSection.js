import React from 'react';
import './index.css';  // Include your custom styles here

const GridImageSection = ({ mainImage, gridImages }) => {
  return (
    <div className="container-fluid mb-5 mt-5">
        <div className="row">

            {/* Left Column with Centered Image */}
            <div className="col-md-6 d-flex align-items-center justify-content-center">
                <img loading="lazy" src={mainImage} className="img-fluid centered-image" alt="Main Section" />
            </div>

            {/* Right Column with 2x2 Grid Images */}
            <div className="col-md-6">
                <div className="row">
                    <div className="col-6">
                        <img loading="lazy" src={gridImages[0]} className="img-fluid grid-image" alt="Grid1" />
                    </div>
                    <div className="col-6">
                        <img loading="lazy" src={gridImages[1]} className="img-fluid grid-image" alt="Grid2" />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-6">
                        <img loading="lazy" src={gridImages[2]} className="img-fluid grid-image" alt="Grid3" />
                    </div>
                    <div className="col-6">
                        <img loading="lazy" src={gridImages[3]} className="img-fluid grid-image" alt="Grid4" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GridImageSection;
