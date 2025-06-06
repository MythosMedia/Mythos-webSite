import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Link } from 'react-router-dom'; 

const BannerTwo = () => {
    const isMobile = window.innerWidth <= 768;

    return (
        <div className="banner banner-style-2">
            <div className="above-shape"></div>
            
            {/* Optimized Image 1 */}
            <div className="above-shape-2">
                <img 
                    src="https://res.cloudinary.com/df2fe2yzk/image/upload/c_scale,w_350,q_auto,f_auto/v1725533116/sec-1-letter_pqjpi3.svg" 
                    width={350} 
                    alt="letter-shape" 

                />
            </div>
            
            {/* Optimized Image 2 */}
            <div className="above-shape-3">
                <img 
                    src="https://res.cloudinary.com/df2fe2yzk/image/upload/c_scale,w_350,q_auto,f_auto/v1725533116/sec-1-hand_ruumlm.svg" 
                    width={350} 
                    alt="letter-hand" 

                />
            </div>

            {/* Optimized Image 3 */}
            <div className="above-shape-4">
                <img 
                    src="https://res.cloudinary.com/df2fe2yzk/image/upload/c_scale,w_350,q_auto,f_auto/v1725533368/sec-1-pc_tjd460.svg" 
                    width={350} 
                    alt="letter-pc" 

                />
            </div>

            {/* Optimized Image 4 - Large Image */}
            <div className="above-shape-13">
                <img 
                    src={`https://res.cloudinary.com/df2fe2yzk/image/upload/c_scale,w_350,q_auto,f_auto/v1725533142/sec-1-man_pcammf.svg`} 
                    alt="large-man" 

                />
            </div>

            {/* Optimized Image 5 */}
            <div className="above-shape-14">
                <img 
                    src="https://res.cloudinary.com/df2fe2yzk/image/upload/c_scale,w_350,q_auto,f_auto/v1725533116/sec-1-sarya_pxqfwp.svg" 
                    width={350} 
                    alt="letter-sarya" 

                />
            </div>

            <div className="container-fluid">
                <div className="row align-items-center" style={{marginTop:"100px"}}>
                    <div className="col-lg-6">
                        <div className="banner-content">
                        <h1 className="title">FULL-SERVICE DIGITAL AGENCY</h1>
                            <Link to={"/about-us"} className="axil-btn btn-fill-white btn-large">View More</Link>
                        </div>
                    </div>
                </div>
            </div>
            
            <ul className="list-unstyled shape-group-18">
                {/* The rest of your animations and shapes */}
                <li className="shape shape-5">
                    <AnimationOnScroll animateIn="zoomIn" duration={1} animateOnce={true} delay={500}>
                        <img 
                            loading="lazy" 
                            src="/images/others/bubble-14.png" 
                            alt="Shape" 
                        />
                    </AnimationOnScroll>
                </li>
                <li className="shape shape-6">
                    <AnimationOnScroll animateIn="zoomIn" duration={1} animateOnce={true} delay={500}>
                        <img 
                            loading="lazy" 
                            src="/images/others/bubble-16.png" 
                            alt="Shape" 
                        />
                    </AnimationOnScroll>
                </li>
            </ul>
        </div>
    );
}

export default BannerTwo;
