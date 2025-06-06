import React from 'react';
import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas'
import { FaFacebookF, FaLinkedinIn, FaPhone, FaInstagram ,FaEnvelope} from "react-icons/fa";


const OffcanvasMenu = ({offcanvasShow, offcanvasHide}) => {
    return (
        <Offcanvas show={offcanvasShow} onHide={offcanvasHide} placement="end" className="header-offcanvasmenu">
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body>
                <form action="#" className="side-nav-search-form">
                    <div className="form-group">
                        <input type="text" className="search-field" name="search-field" placeholder="Search..." />
                        <button aria-label='button to search for project by name' className="side-nav-search-btn"><i className="fas fa-search"></i></button>
                    </div>
                </form>
                <div className="row ">
                    <div className="col-lg-5 col-xl-6">
                        <ul className="main-navigation list-unstyled">
                            <li><Link aria-label='link to home page' to={"/"}>Home</Link></li>
                            <li><Link aria-label='link to about us page' to={"/creative-agency"}>About Us</Link></li>
                            <li><Link aria-label='link to services page' to={"/service-two"}>Services</Link></li>
                            <li><Link aria-label='link to contact page' to={"/contact"}>Contact</Link></li>
                            {/* <li><Link to={"/corporate-agency"}>Corporate Agency</Link></li> */}
                        </ul>
                    </div>
                    <div className="col-lg-7 col-xl-6">
                        <div className="contact-info-wrap">
                            <div className="contact-inner">
                                {/* <address className="address">
                                    <span className="title">Contact Information</span>
                                    <p>Theodore Lowe, Ap #867-859 <br /> Sit Rd, Azusa New York</p>
                                </address> */}
                                <address className="address">
                                    <span className="title">We're Available 24/7. Call Now.</span>
                                    <a aria-label='our phone number' href="tel:8884562790" className="tel"><FaPhone />(604) 227-6898</a>
                                    <a aria-label='our email' href="tel:12125553333" className="tel"><FaEnvelope /> create@mythosmedia.io</a>
                                </address>
                            </div>
                            <div className="contact-inner">
                                <h5 className="title">Find us here</h5>
                                <div className="contact-social-share">
                                    <ul className="social-share list-unstyled">
                                        <li>
                                            <a aria-label='link to our facebook ' href="https://facebook.com/"><FaFacebookF /></a>
                                        </li>

                                        <li>
                                            <a aria-label='link to our instagram ' href="https://instagram.com/"><FaInstagram /></a>
                                        </li>
                                        {/* <li>
                                            <a href="https://www.behance.net/"><FaBehance /></a>
                                        </li> */}
                                        <li>
                                            <a aria-label='link to our linkedin ' href="https://www.linkedin.com/"><FaLinkedinIn /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default OffcanvasMenu;
