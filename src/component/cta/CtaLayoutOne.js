import React from 'react';
import { Link } from 'react-router-dom';


const CtaLayoutOne = () => {

    return (

        <div className="section call-to-action-area">
            <div className="container">
                <div className="call-to-action">
                    <div className="section-heading heading-light">
                        <span className="subtitle">Let's Work Together</span>
                        <h2 className="title">Need a successful project?</h2>
                        <Link aria-label='link to contact page to estimate project' to={"/contact"} className="axil-btn btn-large btn-fill-white">
                            Estimate Project
                        </Link>
                    </div>
                    <div className="thumbnail">
                        <div className="larg-thumb" data-sal="zoom-in" data-sal-duration="600" data-sal-delay="100">
                            <img alt="mythos media shape" loading="lazy" className="paralax-image" src={"/images/others/estimate-project-42.svg"}  />
                        </div>
                      
                    </div>
                </div>
            </div>
            <ul className="list-unstyled shape-group-9">
                {/* <li className="shape shape-1"><img loading="lazy" src={"/images/others/bubble-12.png"} alt="Comments" /></li> */}
                <li className="shape shape-1">
                    <img loading="lazy" src={"/images/landing/sec-6-logo.png"} alt="mythos media shape" />
                    </li>


                <li className="shape shape-2">
                    <img loading="lazy" src={"/images/others/bubble-16.png"} alt="mythos media shape" />
                    </li>

                <li className="shape shape-3">
                    <img loading="lazy" src={"/images/others/bluebuble.png"} alt="mythos media shape" />
                    </li>

                <li className="shape shape-4">
                    <img loading="lazy" src={"/images/others/white-circle.png"} alt="mythos media shape" />
                    </li>

                <li className="shape shape-5">
                    <img loading="lazy" src={"/images/others/bubble-16.png"} alt="mythos media shape" />
                    </li>

                <li className="shape shape-6">
                    <img loading="lazy" src={"/images/others/bubble-15.png"} alt="mythos media shape" />
                    </li>

                <li className="shape shape-7">
                    <img loading="lazy" src={"/images/others/bubble-16.png"} alt="mythos media shape" />
                    </li>
            </ul>
        </div>
    )

}

export default CtaLayoutOne;