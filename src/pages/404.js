import React from 'react';
import { Link } from 'react-router-dom';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import HeaderOne from '../common/header/HeaderOne';
import SEO from '../common/SEO';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';

const ErrorPage = () => {

    return (
        <>
        <SEO title="404 Not Found" />
        <ColorSwitcher />
            <main className="main-wrapper">
                <HeaderOne />
                <div className="error-page onepage-screen-area">
                    <div className="container">
                        <div className="row align-items-center">
                        <div className="col-lg-6">
                        <AnimationOnScroll  animateIn="slideInUp" duration={1} delay={300} animateOnce={true}>
                            <div className="content">
                                <h2 className="title">Page Not Found</h2>
                                <p>Oops! The page you are looking for doesn't exist or has been moved.
We apologize for the inconvenience. Please check the URL for any errors, or click the button below to return to the previous page.</p>
                                <Link to={"/"} className="axil-btn btn-fill-primary">Go Back</Link>
                            </div>
                        </AnimationOnScroll>
                        </div>
                        <div className="col-lg-6">
                        <AnimationOnScroll  animateIn="zoomIn" duration={1} delay={300} animateOnce={true}>
                            <div className="thumbnail">
                                <img loading="lazy" src={"/images/others/404.png"} alt="404" />
                            </div>
                        </AnimationOnScroll>
                        </div>
                        </div>
                    </div>
                    <ul className="shape-group-8 list-unstyled">
                        {/* <li className="shape shape-1">
                            <img loading="lazy" src={"/images/others/bubble-9.png"} alt="Bubble" />
                        </li> */}
                        <li className="shape shape-2">
                            <img loading="lazy" src={"/images/mythos-logo-01.png"} alt="Bubble" />
                        </li>
                        {/* <li className="shape shape-3">
                            <img loading="lazy" src={"/images/others/line-4.png"} alt="Line" />
                        </li> */}
                    </ul>
                </div>
            </main>
        </>
    )
}

export default ErrorPage;