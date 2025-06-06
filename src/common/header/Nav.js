import React from 'react';
import { Link } from 'react-router-dom';


const Nav = () => {
    return (
        <nav className="mainmenu-nav">
            <ul className="mainmenu">
                <li className="menu-item-has-children">
                    <Link aria-label='link to home page' to="/">Home</Link>
                </li>
                <li className="menu-item-has-children">
                    <Link aria-label='link to about us page' to="/about-us">About us</Link>
                </li>
                <li className="menu-item-has-children">
                    <Link aria-label='link to services page' to="/service-two">Services </Link>
                </li>
                <li className="menu-item-has-children">
                    <Link aria-label='link to services page' to="/mythospy">Mythospy</Link>
                </li>
                <li className="menu-item-has-children">
                    <Link to="/projects">Projects</Link>
                    {/* <ul className="axil-submenu">
                        <li><Link to={"/project-grid-one"}>Two Column</Link></li>
                        <li><Link to={"/project-grid-two"}>Three Column</Link></li>
                        <li><Link to={"/project-grid-three"}>Four Column</Link></li>
                        <li><Link to={"/project-width-one"}>Three Column Width</Link></li>
                        <li><Link to={"/project-width-two"}>Four Column Width</Link></li>
                        <li><Link to={"/project-details/The-Wallremover"}>Portfolio Details</Link></li>
                    </ul> */}
                </li>
                <li className="menu-item-has-children">
                    <Link to="/blog">Blog</Link>
                    {/* <ul className="axil-submenu">
                        <li><Link to={"/blog-grid-"}>Two Column</Link></li>
                        <li><Link to={"/project-grid-two"}>Three Column</Link></li>
                        <li><Link to={"/project-grid-three"}>Four Column</Link></li>
                        <li><Link to={"/project-width-one"}>Three Column Width</Link></li>
                        <li><Link to={"/project-width-two"}>Four Column Width</Link></li>
                        <li><Link to={"/project-details/The-Wallremover"}>Portfolio Details</Link></li>
                    </ul> */}
                </li>
           
              
                <li><Link aria-label='link to contact page' to={"/contact"}>Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;