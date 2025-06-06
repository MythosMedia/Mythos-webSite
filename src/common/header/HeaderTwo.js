import React, { useState } from 'react';

import Logo from '../../elements/logo/Logo';
import Nav from './Nav';
import OffcanvasMenu from './OffcanvasMenu';
import StickyHeader from './StickyHeader';
import SwitcherHeader from '../../elements/switcher/SwitcherHeader';
import MobileMenu from './MobileMenu';


const HeaderTwo = () => {

    const [showOffcanvas, setShowOffcanvas] = useState(false);

    const OffcanvasHandleClose = () => setShowOffcanvas(false);
    const OffcanvasHandleShow = () => setShowOffcanvas(true);

    const sticky = StickyHeader(100);

    const MobileMenuHandler = () => {
        const menuPopup = document.querySelector('.mobilemenu-popup');
        const body = document.querySelector('body');
    
        if (menuPopup && body) {
            menuPopup.classList.toggle("show");
            body.classList.toggle("mobilemenu-show");
    
            const elements = document.querySelectorAll('.mobilemenu-popup .menu-item-has-children > a');
    
            elements.forEach((element) => {
                element.onclick = function() {
                    const submenu = this.parentElement.querySelector('.axil-submenu');
                    if (submenu) {
                        submenu.classList.toggle("active");
                    }
                    this.classList.toggle("open");
                };
            });
        }
    };
    

    return (
        <>
            <header className="header axil-header header-style-2">
                <div className={`axil-mainmenu ${sticky ? "axil-sticky" : ""}`}>
                    <div className="container-fluid">
                        <div className="header-navbar">
                            <div className="header-logo">
                                <Logo 
                                limage="/images/Mythos-logo-10.png"

                                dimage="/images/Mythos-logo-11.png"
                                simage="/images/logo-02.png"
                                />
                            </div>
                            <div className="header-main-nav">
                                <Nav />
                            </div>
                            <div className="header-action">
                                <ul className="list-unstyled">
                                    <li className="sidemenu-btn d-lg-block d-none">
                                        <button aria-label='button to switch mode' className="btn-wrap btn-dark" onClick={OffcanvasHandleShow}>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </button>
                                    </li>
                                    <li className="mobile-menu-btn sidemenu-btn d-lg-none d-block">
                                        <button aria-label='sidebar menu' className="btn-wrap btn-dark" onClick={MobileMenuHandler}>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </button>
                                    </li>
                                    <li className="my_switcher d-block d-lg-none">
                                        <SwitcherHeader />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <OffcanvasMenu offcanvasShow={showOffcanvas} offcanvasHide={OffcanvasHandleClose} />
            <MobileMenu MobileHandler={MobileMenuHandler}/>
        </>
    )
}

export default React.memo(HeaderTwo);