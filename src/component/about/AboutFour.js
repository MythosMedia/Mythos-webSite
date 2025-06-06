import React from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import TrackVisibility from 'react-on-screen';


const AboutFour = () => {
 
    return (
            <div className="section section-padding case-study-featured-area">
                <div className="container">
                    <div className="row" style={{alignItems:'center'}}>
                    <div className="col-xl-6 col-lg-6">
                        <div className="case-study-featured-thumb text-start">
                        <img loading="lazy" src={"https://res.cloudinary.com/df2fe2yzk/image/upload/v1725458540/iphone15-mockup_lk1xh6.jpg"} alt="travel"  width={740} height={740}/>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="case-study-featured">
                        <div className="section-heading heading-left">
                            <span className="subtitle">Who we are</span>
                            <h2 className="title">Your Ambitions, Our Digital Canvas</h2>
                            <p>At Mythos Media, we are the architects of digital transformation, where every strategy is a bold stroke on the canvas of your brand’s future. We don’t just follow trends—we set them, crafting campaigns that resonate, captivate, and convert.</p>
                            <p>With a blend of creativity, data-driven insights, and a relentless drive for excellence, we partner with you to turn your brand's potential into a digital force that leaves a lasting impression. We’re not just in the business of marketing we’re in the business of making your brand unforgettable.</p>
                            <Link to="/contact" className="axil-btn btn-fill-primary btn-large">Get in touch</Link>
                        </div>
                        <div className="case-study-counterup">
                            <div className="single-counterup">
                            <h2 className="count-number">
                            <TrackVisibility once>
                                {({isVisible}) => (
                                    <span className="number count">
                                        {isVisible ? <CountUp end="5" duration={1} /> : null}
                                    </span>
                                )}  
                            </TrackVisibility>
                            <span className="symbol">+</span>
                            </h2>
                            <span className="counter-title"> Years Reshaping Markets</span>
                            </div>
                            <div className="single-counterup">
                            <h2 className="count-number">
                            <TrackVisibility once>
                                {({isVisible}) => (
                                    <span className="number count">
                                        {isVisible ? <CountUp end="100" duration={1} /> : null}
                                    </span>
                                )}  
                            </TrackVisibility>
                            <span className="symbol">+</span>
                            </h2>
                            <span className="counter-title">Projects delivered so far</span>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AboutFour;