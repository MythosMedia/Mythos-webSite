import React from 'react';
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Tilty from 'react-tilty';


const BannerFour = () => {
    return (
        <div className="banner banner-style-4">
            <div className="container">
                <div className="banner-content">
                    <h1 className="title">Think the design, design the thinking.</h1>
                    <p>Create live segments and target the right people 
                        for messages based on their behaviors.</p>
                    <div>
                        <Link to={"/project-grid-one"} className="axil-btn btn-fill-primary btn-large">View Showcase</Link>
                    </div>
                </div>
                <div className="banner-thumbnail">
                    <div className="large-thumb">
                        <Tilty perspective={3000}>
                            <img loading="lazy" src={"/images/banner/banner-thumb-7.png"} alt="Shape" />
                        </Tilty>
                    </div>
                </div>
                <div className="banner-social">
                <   div className="border-line" />
                    <ul className="list-unstyled social-icon">
                        <li><a href="https://facebook.com/"><FaFacebookF /> Facebook</a></li>
                        <li><a href="https://twitter.com/"><FaXTwitter /> twitter</a></li>
                        <li><a href="https://www.linkedin.com/"><FaLinkedinIn /> Linkedin</a></li>
                    </ul>
                </div>
            </div>
            <ul className="list-unstyled shape-group-19">
                <li className="shape shape-1">
                    <img loading="lazy" src={"/images/others/bubble-29.png"} alt="Bubble" />
                </li>
                <li className="shape shape-2">
                    <img loading="lazy" src={"/images/others/line-7.png"} alt="Bubble" />
                </li>
            </ul>
        </div>
    )
}

export default BannerFour;