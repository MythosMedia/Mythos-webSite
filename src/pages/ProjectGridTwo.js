import React from 'react';

import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import BcrumbBannerOne from '../elements/breadcrumb/BcrumbBannerOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import SEO from '../common/SEO';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import ProjectOne from '../component/project/ProjectOne';


const ProjectGridTwo = () => {

    return (
        <>
        <SEO title="Project Three Column" />
        <ColorSwitcher />
        <main className="main-wrapper">
            <HeaderOne />
            <BcrumbBannerOne 
                title="Our Projects"
                paragraph ="Explore how Mythos Media has addressed industry-specific challenges with creative solutions by our talented team.
                "
                styleClass=""
                mainThumb="https://res.cloudinary.com/df2fe2yzk/image/upload/v1725534855/Mythos_billborad-min_ee9qmf.jpg"
            />
            <ProjectOne colSize="col-xl-6 col-md-6" columnGap="row-15"/>
            <CtaLayoutOne />
            <FooterOne parentClass="" />
        </main>
        </>
    )
}

export default ProjectGridTwo;