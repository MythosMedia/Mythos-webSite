import React from "react";
import { Link } from "react-router-dom";
import SEO from "../common/SEO";
import FooterOne from "../common/footer/FooterOne";
import HeaderThree from "../common/header/HeaderThree";
import AboutOne from "../component/about/AboutOne";
import BannerOne from "../component/banner/BannerOne";
import FormOne from "../component/contact/FormOne";
import PricingOne from "../component/pricing/PricingOne";
import ServicePropOne from "../component/service/ServicePropOne";
import Data from "../data/MythosSpy/Data.json";
import SectionTitle from "../elements/section-title/SectionTitle";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";

const MythosSpy = () => {
  return (
    <>
      <SEO title="Digital Agency" />
      <ColorSwitcher />
      <main className="main-wrapper">
        <HeaderThree />
        <BannerOne />
        <div className="section section-padding-2 bg-color-dark overflow-hidden">
          <div className="container">
            <div className="row  justify-content-center align-items-center">
              <div className="col-md-6">
                <span className="subtitle" style={{ color: "#FCD878" }}>
                  About us
                </span>
                <p
                  className="pt-3 fw-bold text-white"
                  style={{ fontSize: "45px" }}
                >
                  INTRODUCING{" "}
                  <span style={{ color: "#FCD878" }}> MYTHOSPY &nbsp; </span>
                  YOUR STRATEGIC ALLY IN KEYWORD INTELLIGENCE
                </p>
              </div>
              <div className="col-md-6">
                <p className="text-white" style={{ lineHeight: "2rem" }}>
                  Navigating the digital marketplace requires more than just
                  presence—it demands sharp insights. That’s where Mythospy
                  comes into play. Our proprietary keyword scraper gives Mythos
                  Media clients the edge they need, transforming data collection
                  into a strategic powerhouse.
                </p>
              </div>
            </div>
            {/* <div className="" style={{
              position: "absolute",
              top: "-130px",
              left: "-30px",
            }}>
              <img
                width="250"
                src="https://res.cloudinary.com/df2fe2yzk/image/upload/v1731501355/Mythospy_web_page_elements-05_ozg98e.svg"
                alt=""
              />
            </div> */}
          </div>
          <ul className="list-unstyled shape-group-10">
            {/* <li className="shape shape-2">
              <img
                src={
                  "https://res.cloudinary.com/df2fe2yzk/image/upload/v1731501355/Mythospy_web_page_elements-05_ozg98e.webp"
                }
                alt="Circle"
              />
            </li> */}
            <li className="shape shape-3">
              <img src={"/images/others/bubble-43.png"} alt="Circle" />
            </li>
          </ul>
        </div>
        <AboutOne />
        <div className="section section-padding-2 bg-color-dark">
          <div className="container">
            <SectionTitle
              subtitle='<span style="color: #fcd878">  Gain the strategic edge that only Mythospy delivers</span>'
              title="WHY MYTHOSPY
                        IS ESSENTIAL    "
              textAlignment="heading-light-left"
              textColor=""
            />
            <div className="row">
              <ServicePropOne
                colSize="col-xl-6 col-md-6"
                serviceStyle=""
                itemShow="6"
                Data={Data}
              />
            </div>
          </div>
        </div>

        <div className="section section-padding case-study-featured-area">
          <div className="container">
            <div className="row" style={{ alignItems: "center" }}>
              <div className="col-xl-6 col-lg-6">
                <div className="case-study-featured-thumb text-start">
                  <img
                    loading="lazy"
                    style={{ height: "600px !important" }}
                    src={
                      "https://res.cloudinary.com/df2fe2yzk/image/upload/h_650/v1731501359/Mythospy_web_page_image-10_yld0e8.webp"
                    }
                    alt="travel"
                    id="spy-image"
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="case-study-featured">
                  <div className="section-heading heading-left">
                    <span className="subtitle" style={{ color: "#002C6E" }}>
                      How It Works
                    </span>
                    <h2 className="title">The Mechanics of Mythospy</h2>
                    <p>
                      Using cutting-edge technology, Mythospy meticulously
                      scours the digital landscape, harvesting keyword data and
                      analyzing trends with surgical precision. The result is a
                      comprehensive report that unveils the most impactful
                      keywords tailored to your business, along with strategic
                      recommendations for seamless integration into your content
                      ecosystem.
                    </p>

                    <Link
                      to="/contact"
                      className="axil-btn btn-fill-primary btn-large"
                    >
                      Get in touch
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="section section-padding"
          style={{ background: "#002c6e" }}
        >
          <div className="container">
            <div className="row text-center">
              <div className="col-md-12">
                <span className="subtitle" style={{ color: "#FCD878" }}>
                  Choose Your Plan
                </span>
                <p
                  className="pt-3 fw-bold text-white"
                  style={{ fontSize: "45px" }}
                >
                 Service Packages
                </p>
              </div>
            </div>
            <PricingOne />
          </div>
        </div>

        <section className="section section-padding-equal bg-color-light">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="about-us">
                  <div className="section-heading heading-left mb-0">
                    <span className="subtitle" style={{ color: "#002C6E" }}>
                      About Us
                    </span>
                    <h2 className="title mb--40">
                      Elevate Your Brand with Mythospy
                    </h2>
                    <p>
                      At Mythos Media, we are steadfast in our commitment to
                      delivering unparalleled value to our clients. Mythospy
                      epitomizes our ethos of innovation and excellence,
                      providing you with the tools necessary to navigate the
                      complexities of digital marketing. Contact us today to see
                      how Mythospy can take your marketing strategy to new
                      heights!
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-xl-5 col-lg-6 offset-xl-1">
                <div className="contact-form-box">
                  <h3 className="title">Connect with us today</h3>
                  <FormOne />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <CtaLayoutOne /> */}
        <FooterOne parentClass="" />
      </main>
    </>
  );
};

export default MythosSpy;
