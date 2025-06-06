import React from "react";

import FormOne from "../contact/FormOne";
import { Link } from "react-router-dom";

const AboutOne = ({ bg = null,title,description }) => {
  return (
    <section className="section section-padding-equal" style={bg}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-us">
              <div className="section-heading heading-left mb-0">
                <span
                  className="subtitle"
                  style={{ color: bg ? "#fcd878" : "#002C6E" }}
                >
                  Core Insights
                </span>
                <h2 className={`title mb--40 ${bg ? "text-white" : ""} `}>
                  {title ? title:"THE ESSENCE OF MYTHOSPY"}
                </h2>
                <p className={`${bg ? "text-white" : ""}`}>
                  {
                    description ? description : `
                    Mythospy goes beyond being just a tool—it’s a revolutionary
                    solution crafted to uncover the most influential keywords in
                    your industry. With advanced scraping technology, it digs into
                    search trends, providing vital insights that can enhance your
                    content strategy and boost your online presence.
                  `
                  }
                </p>
                {bg && (
                  <Link
                    to="/contact"
                    className="axil-btn btn-fill-primary btn-large"
                    style={{ backgroundColor: "#fcd878", color: "#002C6E" }}
                  >
                    Get in touch
                  </Link>
                )}
              </div>
            </div>
          </div>

          <div className="col-xl-5 col-lg-6 offset-xl-1">
            <div className="">
              <img
                src="https://res.cloudinary.com/df2fe2yzk/image/upload/v1731501356/Mythospy_web_page_elements-04_yawsrw.svg"
                alt=""
              />
            </div>
          </div>
        </div>
       
      </div>
    </section>
  );
};

export default AboutOne;
