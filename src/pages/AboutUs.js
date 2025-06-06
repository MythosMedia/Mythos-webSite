import React from 'react';

import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import SEO from '../common/SEO';
import BcrumbBannerOne from '../elements/breadcrumb/BcrumbBannerOne';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import ProcessOne from '../component/process/ProcessOne';
import AboutThree from '../component/about/AboutThree';
import AboutFour from '../component/about/AboutFour';
import TeamOne from '../component/team/TeamOne';
import CounterUpTwo from '../component/counterup/CounterUpTwo';


const AboutUs = () => {

    return (
        <>
        <SEO title="About us" />
        <ColorSwitcher />
            <main className="main-wrapper">
                <HeaderOne />
                <BcrumbBannerOne 
                title="Full-Service Digital <br/> Marketing Agency "
                paragraph ="As one of North America’s leaders in specialized digital marketing, we know that every industry is unique. Choose experts who understand your business. "
                styleClass="thumbnail-4"
                mainThumb="https://res.cloudinary.com/df2fe2yzk/image/upload/v1725457280/laptop_mockup_09_jwtibs.jpg"
                  width="938px"
                   height="666px"
                />
                <AboutFour />
                <AboutThree />
                {/* <AboutFive /> */}
                <CounterUpTwo/>
                <TeamOne/>
                <ProcessOne />
                <CtaLayoutOne />
                <FooterOne parentClass="" />
            </main>
        </>
    )
}

export default AboutUs;