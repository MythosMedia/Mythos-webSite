import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelopeOpen } from "react-icons/fa";
import Countdown from 'react-countdown';

import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import SEO from '../common/SEO';


const ComingSoon = () => {

    const Completionist = () => <span>Our Site is Ready to Go!</span>;

    const SetCountdownTime = "2023-01-10T17:00:00";

    const CountDownRender = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
          return <Completionist />; 
        } else {
          return (
              <div className="countdown">
                  <div className="countdown-section">
                    <span className="countdown-number">{days}</span>
                    <span className="countdown-unit">Days</span>
                  </div>
                  <div className="countdown-section">
                    <span className="countdown-number">{hours}</span>
                    <span className="countdown-unit">Hours</span>
                  </div>
                  <div className="countdown-section">
                    <span className="countdown-number">{minutes}</span>
                    <span className="countdown-unit">Hours</span>
                  </div>
                  <div className="countdown-section">
                    <span className="countdown-number">{seconds}</span>
                    <span className="countdown-unit">Hours</span>
                  </div>
              </div>
          )
        }
      }


    return (
        <>
        <SEO title="Coming Soon" />
        <ColorSwitcher />
            <main className="main-wrapper">
                <div className="coming-soon-area onepage-screen-area">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                        <div className="col-12">
                            <div className="site-logo">
                                <Link to={"/"} className="logo-light"><img loading="lazy" src={"/images/logo-2.svg"} alt="Logo" /></Link>
                                <Link to={"/"} className="logo-dark"><img loading="lazy" src={"/images/logo-3.svg"} alt="Logo" /></Link>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-8">
                            <div className="content">
                            <h2 className="title">Our new website is on its way</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <Countdown date={SetCountdownTime} zeroPadTime={3} renderer={CountDownRender}></Countdown>
                            <form>
                                <div className="input-group">
                                    <span className="mail-icon"><FaEnvelopeOpen /> </span>
                                    <input type="email" className="form-control" placeholder="Email address" />
                                    <button className="subscribe-btn" type="submit">Notify Me</button>
                                </div>
                            </form>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="thumbnail">
                                <img loading="lazy" src={"/images/others/coming-soon.png"} alt="Coming Soon" />
                            </div>
                        </div>
                        </div>
                    </div>
                    <ul className="shape-group-8 list-unstyled">
                        <li className="shape shape-2">
                            <img loading="lazy" src={"/images/others/bubble-28.png"} alt="Bubble" />
                        </li>
                        <li className="shape shape-3">
                            <img loading="lazy" src={"/images/others/line-4.png"} alt="Line" />
                        </li>
                    </ul>
                </div>
            </main>
        </>
    )
}

export default ComingSoon;