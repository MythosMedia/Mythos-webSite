import React from 'react';
import { FaFacebookF, FaPinterestP, FaLinkedin, FaInstagram, FaVimeoV, FaDribbble, FaBehance } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const BlogAuthor = ({data}) => {
    return (
        <div className="blog-author">
            <div className="author">
                <div className="author-thumb">
                    <img loading="lazy" src={`${data?.avatar_url?.url}`} alt="Blog Author" />
                </div>
                <div className="info">
                    <h5 className="title">{data?.display_name}</h5>
                    <p>{data?.job_title}</p>
                    <p>{data?.description}</p>
                    {/* <ul className="social-share list-unstyled">
                        <li><a href={data.social[0].facebook}><FaFacebookF /></a></li>
                        <li><a href={data.social[0].twitter}><FaXTwitter /></a></li>
                        <li><a href={data.social[0].linkedin}><FaLinkedin /></a></li>
                        <li><a href={data.social[0].instagram}><FaInstagram /></a></li>
                        <li><a href={data.social[0].vimeo}><FaVimeoV /></a></li>
                        <li><a href={data.social[0].pinterst}><FaPinterestP /></a></li>
                        <li><a href={data.social[0].dribble}><FaDribbble /></a></li>
                        <li><a href={data.social[0].behance}><FaBehance /></a></li>
                    </ul> */}
                </div>
            </div>
        </div>
    )
}

export default BlogAuthor;