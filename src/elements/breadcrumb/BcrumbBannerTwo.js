import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure to import Bootstrap CSS
import ImageLoader from '../../common/placeholder/ImageHolder';
import './index.css'

const BcrumbBannerTwo = ({ title, paragraph, mainThumb }) => {

    return (
        <div className="breadcrum-area breadcrumb-banner single-breadcrumb">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="section-heading heading-left">
                            <h1 className="title h2" dangerouslySetInnerHTML={{ __html: title }}></h1>
                            <p dangerouslySetInnerHTML={{ __html: paragraph }}></p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="banner-thumbnail">
                           <ImageLoader mainThumb={mainThumb} />
                        </div>
                    </div>
                </div>
            </div>
            <ul className="shape-group-8 list-unstyled">
                {/* <li className="shape shape-1">
                    <img src={"/images/others/bubble-9.png"} alt="Bubble" />
                </li> */}
            </ul>
        </div>
    );
};

export default BcrumbBannerTwo;
