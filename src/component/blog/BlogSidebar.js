import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterest, FaYoutube} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import WidgetPost from './widget/WidgetPost';
import WidgetCategory from './widget/WidgetCategory';

const BlogSidebar = () => {
    return (
        <div className="axil-sidebar">
            <div className="widget widget-search">
                <h4 className="widget-title">Search</h4>
                <form action="#" className="blog-search">
                    <input type="text" placeholder="Search…" />
                    <button className="search-button"><FaSearch /></button>
                </form>
            </div>
            {/* <div className="widget widget-categories">
                <h4 className="widget-title">Categories</h4>
                <WidgetCategory />
            </div> */}
            <div className="widget widge-social-share">
                <div className="blog-share">
                    <h5 className="title">Follow:</h5>
                    <ul className="social-list list-unstyled">
                        <li><a href="https://www.facebook.com/profile.php?id=100087439878509&mibextid=ZbWKwL"><FaFacebookF /></a></li>
                        <li><a href="https://www.instagram.com/createyourmythos?igsh=dHFzOHcyZDR3Mzhr"><FaInstagram /></a></li>
                        <li><a href="https://www.linkedin.com/company/mythos-media-io/"><FaLinkedinIn /></a></li>
                    </ul>
                </div>
            </div>
            <div className="widget widget-recent-post">
                <h4 className="widget-title">Recent post</h4>
                <WidgetPost />
            </div>
            {/* <div className="widget widget-banner-ad">
                <Link to="#">
                    <img loading="lazy" src={"/images/banner/widget-banner.png"} alt="banner" />
                </Link>
            </div> */}
        </div>
    )
}

export default BlogSidebar;