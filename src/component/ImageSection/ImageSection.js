import React from 'react';
import './imagesection.css';
import LazyLoad from 'react-lazyload';


const ImageSection = ({ subImage1, subImage2 }) => {
    return (
      <div className="image-section container-fluid container-fluid-2 mb-0 mt-0" style={{overflow: 'hidden'}}>
          <div className="row no-gutters">
              <div className="col-md-6 colMD-6">
              {/* <LazyLoad debounce={false}  offset={500} placeholder={<div className="image-placeholder" />}> */}
                      <img src={subImage1} className="full-width-image" alt="mythos media TWR" />
                  {/* </LazyLoad> */}
              </div>
              <div className="col-md-6 colMD-6">
              {/* <LazyLoad debounce={false}  offset={500} placeholder={<div className="image-placeholder" />}> */}
                      <img src={subImage2} className="full-width-image" alt="mythos media TWR" />
                  {/* </LazyLoad> */}
              </div>
          </div>
      </div>
    );
}

export default ImageSection;
