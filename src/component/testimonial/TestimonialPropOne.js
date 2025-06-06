import React, { useEffect, useState } from 'react';
import {
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
  } from "mdb-react-ui-kit";

import TestimonialData from "../../data/testimonial/TestimonialData.json";


const allData = TestimonialData;


const TestimonialItem = ({ colSize, itemShow }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
      const mediaQuery = window.matchMedia('(max-width: 768px)');
      const handleScreenChange = () => setIsSmallScreen(mediaQuery.matches);

      mediaQuery.addListener(handleScreenChange);
      handleScreenChange(); // Initial check

      return () => mediaQuery.removeListener(handleScreenChange);
  }, []);

  return (
      <MDBContainer className="my-5">
          <MDBCarousel
              showControls={!isSmallScreen} // Hide icons on small screens
              autoPlay={isSmallScreen} // Auto-slide only on small screens
              interval={3000}
              dark
          >
              <MDBCarouselInner>
                  {allData.slice(0, itemShow).map((data, index) => (
                      <MDBCarouselItem key={index} className={`text-center ${index === 0 ? 'active' : ''}`}>
                          <div className={`${colSize}`}>
                              <img loading="lazy" src={data.authorimg} width={250} height={63} alt='mythos media client logo' />
                              <MDBRow className="d-flex justify-content-center">
                                  <MDBCol lg="8">
                                      <h5 className="mb-3 name">{data.authorname}</h5>
                                      <p className='designation'>{data.authordesig}</p>
                                      <p className="">
                                          <MDBIcon fas icon="quote-left" className="pe-2" />
                                          {data.description}
                                      </p>
                                  </MDBCol>
                              </MDBRow>
                              <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                                  <li>
                                      <MDBIcon fas icon="star" size="sm" />
                                  </li>
                                  <li>
                                      <MDBIcon fas icon="star" size="sm" />
                                  </li>
                                  <li>
                                      <MDBIcon fas icon="star" size="sm" />
                                  </li>
                                  <li>
                                      <MDBIcon fas icon="star" size="sm" />
                                  </li>
                                  <li>
                                      <MDBIcon fas icon="star" size="sm" />
                                  </li>
                                 
                              </ul>
                          </div>
                      </MDBCarouselItem>
                  ))}
              </MDBCarouselInner>
          </MDBCarousel>
      </MDBContainer>
  );
};
export default TestimonialItem;