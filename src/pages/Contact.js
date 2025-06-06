import React from 'react';

import SEO from '../common/SEO';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import ContactLocation from '../component/contact/ContactLocation';
import FormTwo from '../component/contact/FormTwo';
import BreadCrumbOne from '../elements/breadcrumb/BreadCrumbOne';
import SectionTitle from '../elements/section-title/SectionTitle';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';



const Contact = () => {
    return (
        <>
            <SEO title="Contact" />
            <ColorSwitcher />
            <main className="main-wrapper">
                <HeaderOne />
                <BreadCrumbOne 
                title="Contact"
                page="Contact"
                />

            <div className="section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-6">
                            <div className="contact-form-box shadow-box mb--30">
                                <h3 className="title">Contact Us Now</h3>
                                <FormTwo />
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 offset-xl-1">
                            <div className="contact-info mb--100 mb_md--30 mt_md--0 mt--150">
                                <h4 className="title">Phone</h4>
                                <p>Our customer care is open from Mon-Fri, 08:00 am to 6:00 pm</p>
                                <h4 className="phone-number"><a href="tel:6042276898">(604) 227-6898</a></h4>
                            </div>
                            <div className="contact-info mb--30">
                                <h4 className="title">Email</h4>
                                <p>We will get back to you as soon as possible.</p>
                                <h4 className="phone-number"><a href="mailto:create@mythosmedia.io">create@mythosmedia.io</a></h4>
                            </div>
                        </div>
                    </div>
                </div>
                <ul className="list-unstyled shape-group-12">
                    {/* <li className="shape shape-1"><img loading="lazy" src={"/images/others/bubble-2.png"} alt="Bubble" /></li>
                    <li className="shape shape-2"><img loading="lazy" src={"/images/others/bubble-1.png"} alt="Bubble" /></li>
                    <li className="shape shape-3"><img loading="lazy" src={"/images/others/circle-3.png"} alt="Circle" /></li> */}
                </ul>
            </div>

            <div className="section section-padding bg-color-dark overflow-hidden">
                <div className="container">
                    <SectionTitle 
                        subtitle="Find Us"
                        title="Our offices"
                        description=""
                        textAlignment="heading-light-left"
                        textColor=""
                    />
                    <div className="row">
                        <ContactLocation />
                    </div>
                </div>
                <ul className="shape-group-11 list-unstyled">
                    {/* <li className="shape shape-1"><img loading="lazy" src={"/images/others/line-6.png"} alt="line" /></li> */}
                    {/* <li className="shape shape-2"><img loading="lazy" src={"/images/others/circle-3.png"} alt="line" /></li> */}
                </ul>
            </div>

            <FooterOne parentClass="pt--150 pt_lg--100 pt_md--80 pt_sm--60" />
            </main>
        </>
    )
}

export default Contact;