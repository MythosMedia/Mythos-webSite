import React from 'react';
import { Link , useLocation } from 'react-router-dom';
import { FaFacebookF, FaLinkedin, FaInstagram,  FaEnvelopeOpen } from "react-icons/fa";

import ServiceData from "../../data/service/ServiceMain.json";
import {handleScroll } from '../../utils';


const getServiceData = ServiceData;

const FooterOne = ({parentClass}) => {
    const location = useLocation();
    const handleScrollWrapper = (e, sectionId) => {
        if(location.pathname === '/' || location.pathname === '/service-two') {
          handleScroll(e, sectionId);
        }
      };
    
    return (
        <footer className={`footer-area ${parentClass}`}>
            <div className="container">
                <div className="footer-top">
                    <div className="footer-social-link">
                        <ul className="list-unstyled">
                            <li><Link aria-label='link to facebook page' to="https://www.facebook.com/profile.php?id=100087439878509&mibextid=ZbWKwL"><FaFacebookF /></Link></li>
                            <li><Link aria-label='link to linkedin page' to="https://www.linkedin.com/company/mythos-media-io/"><FaLinkedin /></Link></li>
                            <li><Link aria-label='link to instagram page' to="https://www.instagram.com/createyourmythos?igsh=dHFzOHcyZDR3Mzhr"><FaInstagram /></Link></li>
                           
                        </ul>
                    </div>
                </div>
                <div className="footer-main">
                    <div className="row">
                        <div className="col-xl-6 col-lg-5">
                            <div className="footer-widget border-end">
                                <div className="footer-newsletter">
                                    <h2 className="title">Get in touch!</h2>
                                    <p>Don’t be shy—reach out and let’s start a conversation. We’re eager to hear your ideas and turn them into reality. Your next great project starts here.</p>
                                    <form>
                                        <div className="input-group">
                                            <span className="mail-icon"><FaEnvelopeOpen /> </span>
                                            <input type="email" className="form-control" placeholder="Email address" />
                                            <button className="subscribe-btn" type="submit" aria-label='subscribe newsletter'>Subscribe</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="footer-widget">
                                        <h6 className="widget-title">Services</h6>
                                        <div className="footer-menu-link">
                                            <ul className="list-unstyled">
                                                {getServiceData.slice(0, 6).map((data, index) => (
                                                    <li key={index}>
                                                        <Link  to={`/service-two`} onClick={e=>handleScrollWrapper(e,'services')}  >{data.title}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="footer-widget">
                                        <h6 className="widget-title">Support</h6>
                                        <div className="footer-menu-link">
                                            <ul className="list-unstyled">
                                                <li><Link aria-label='link to contact page' to={"/contact"}>Contact</Link></li>
                                                <li> <Link aria-label='link to privacy policy page' to={"/privacy-policy"}>Privacy Policy</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom"> 
                    <div className="row">
                        <div className="col-md-6">
                            <div className="footer-copyright">
                                <span className="copyright-text">© {new Date().getFullYear()}. All rights reserved by <Link aria-label='link to home page' to="/">Mythos Media</Link>.</span>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="footer-bottom-link">
                                <ul className="list-unstyled">
                                    <li><Link aria-label='link to privacy policy page' to={"/privacy-policy"}>Privacy Policy</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterOne;