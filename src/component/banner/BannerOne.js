import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Link } from "react-router-dom";

const BannerOne = () => {
  return (
    <div className="banner banner-style-1">
      <div className="container">
        <div className="row align-items-end align-items-xl-start" style={{marginBottom:"80px"}}>
          <div className="col-lg-6">
            <div className="banner-content" style={{marginTop:"80px"}}>
              <AnimationOnScroll
                animateIn="fadeInUp"
                animateOnce={true}
                delay={100}
                style={{ marginTop:"150px"}}
              >
                <h1 className="title">
                Turning Data into Dominance <br />

                </h1>
                <span className="subtitle" >
                Master the power of keyword intelligence.
                </span>
                <Link
                  to={"/contact"}
                  className="axil-btn btn-fill-primary btn-large"
                >
                  Get Started
                </Link>
              </AnimationOnScroll>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="banner-thumbnail">
              <AnimationOnScroll
                animateIn="zoomIn"
                duration={2}
                delay={300}
                animateOnce={true}
              >
                <div className="large-thumb">
                  <img
                    loading="lazy"
                    src={
                      "https://res.cloudinary.com/df2fe2yzk/image/upload/v1731501356/Mythospy_web_page_elements-02_qhaszp.svg"
                    }
                    alt="Laptop"
                  />
                </div>
              </AnimationOnScroll>
            </div>
          </div>
        </div>
      </div>
      <ul className="list-unstyled shape-group-21">
        <li className="shape shape-1">
          <img
            loading="lazy"
            src={
              "https://res.cloudinary.com/df2fe2yzk/image/upload/v1731500957/image_7_rta0xy.webp"
            }
            alt="Bubble"
          />
        </li>
        {/* <li className="shape shape-2">
                    <img loading="lazy" src={""} alt="Bubble" />
                </li> */}
        <li className="shape shape-3">
          <img
            loading="lazy"
            src={
              "https://res.cloudinary.com/df2fe2yzk/image/upload/v1731501356/image_8_ulyirl.png"
            }
            alt="Bubble"
          />
        </li>
        <li className="shape shape-4">
          <img
            loading="lazy"
            src={
              "https://res.cloudinary.com/df2fe2yzk/image/upload/v1731501356/image_8_ulyirl.png"
            }
            alt="Bubble"
          />
        </li>
        <li className="shape shape-5">
          <img
            loading="lazy"
            src={
              "https://res.cloudinary.com/df2fe2yzk/image/upload/v1731501356/image_8_ulyirl.png"
            }
            alt="Bubble"
          />
        </li>
        <li className="shape shape-6">
          <img
            loading="lazy"
            src={
              "https://res.cloudinary.com/df2fe2yzk/image/upload/v1731501356/image_8_ulyirl.png"
            }
            alt="Bubble"
          />
        </li>
        <li className="shape shape-7">
          <img
            loading="lazy"
            src={"/images/others/bubble-41.png"}
            alt="Bubble"
          />
        </li>
      </ul>
    </div>
  );
};

export default BannerOne;
