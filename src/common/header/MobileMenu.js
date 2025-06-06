import React from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from "react-icons/fa";

import Nav from './Nav';

const MobileMenu = ({MobileHandler}) => {

    return (
        <div className="mobilemenu-popup">
            <div className="mobilemenu-inner">
                <div className="mobilemenu-header">
                    <div className="mobile-nav-logo">
                        <Link to={"/"}>
                            <img loading="lazy" className="light-mode" src={"/images/Mythos-logo-10.png"} alt="mythos media shape" />
                            <img loading="lazy" className="dark-mode" src={"/images/Mythos-logo-11.png"} alt="mythos media shape" />
                        </Link>
                    </div>
                    <button aria-label="button to close mobile nav" className="mobile-menu-close" onClick={MobileHandler} ><FaTimes /></button>
                </div>
                <div className="mobilemenu-body">
                    <Nav />
                </div>
            </div>
        </div>
    )
}

export default MobileMenu;