import React from 'react';

import SectionTitle from '../../elements/section-title/SectionTitle';
import BlogListOne from '../../component/blog/BlogListOne';


const BlogOne = () => {
    return (
        <div className="section section-padding-equal">
            <div className="container">
                <SectionTitle 
                    subtitle="What's Going On"
                    title="Latest Blogs"
                    description="Catch up on our most recent updates and exciting developments."
                    textAlignment=""
                    textColor=""
                />
                <div className="row g-0">
                    <BlogListOne colSize="col-xl-6" itemShow="2" />
                </div>
            </div>
            <ul className="shape-group-1 list-unstyled">
                <li className="above-shape-9"><img loading="lazy" src={"/images/landing/sec-3-status.svg"} width="200" height="200" style={{opacity:1}}  alt="bubble" /></li>
                {/* <li className="shape shape-2"><img loading="lazy" src={"/images/others/line-1.png"} alt="bubble" /></li> */}
                {/* <li className="shape shape-3"><img loading="lazy" src={"/images/others/line-2.png"} alt="bubble" /></li> */}
                <li className="above-shape-10"><img loading="lazy" src={"/images/landing/sec-6-cap.svg"} width="170" height="170" alt="bubble" /></li>
            </ul>
        </div>
    )
}

export default BlogOne;