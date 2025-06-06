import React from 'react';

import SEO from '../common/SEO';
import FooterOne from '../common/footer/FooterOne';
import HeaderTwo from '../common/header/HeaderTwo';
import IGFeed from '../component/FeedIG/IGFeed';
import BannerTwo from '../component/banner/BannerTwo';
import BrandOne from '../component/brand/BrandOne';
import CounterUpOne from '../component/counterup/CounterUpOne';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import ProjectOne from '../component/project/ProjectOne';
import ServicePropOne from '../component/service/ServicePropOne';
import TestimonialOne from '../component/testimonial/TestimonialOne';
import SectionTitle from '../elements/section-title/SectionTitle';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import BlogOne from '../component/blog/BlogOne';
import AboutOne from '../component/about/AboutOne';


const CreativeAgency = () => {
  

    return (
        <>
        <SEO title="Home"/>
        <ColorSwitcher />
        <main className="main-wrapper">
            <HeaderTwo />
            <BannerTwo />
            <div className="section section-padding">
                <div className="container">
                <SectionTitle 
                    subtitle="What We Can Do For You"
                    title="Services we can <br> help you with"
                    description=""
                    textAlignment="heading-left mb--20 mb_md--70"
                    textColor=""
                />
                    <div className="row">
                        <ServicePropOne colSize="col-lg-4" serviceStyle="service-style-2" itemShow="6" marginTop="yes"/>
                    </div>
                </div>
                <ul className="shape-group-7 list-unstyled">
                    <li className="above-shape-11">
                        <img loading="lazy" src={"/images/landing/sec-2-code.png"} width={230} height={230} alt="mythos media shape" />
                    </li>

                    <li className="shape shape-2 " style={{top:"159px"}} >
                        <img loading="lazy" src={"/images/landing/sec-2-circle.svg"} width={230} height={230} className='rotate' alt="mythos media shape" />
                    </li>

                    <li className="shape shape-3 pointing-hand">
                        <img loading="lazy" src={"/images/landing/sec-2-hand.svg"} width={220} height={220} alt="mythos media shape" />
                    </li>
                </ul>

            </div>
            <ProjectOne parentClass="bg-color-light"/>
            <CounterUpOne />

            {/* <IGFeed/> */}
            <TestimonialOne />

            <AboutOne title={'Your Guide to Smarter Keywords with  Mythospy'} description="Mythospy helps you uncover the keywords that matter most to your audience. It’s your trusted partner in crafting smarter strategies, standing out, and reaching the right people at the right time." bg={{backgroundColor:'#002C6E'}} />
            <BlogOne />
            <BrandOne />
            <CtaLayoutOne />
            <FooterOne parentClass="" />
        </main>
        </>
    )
}

export default CreativeAgency;

