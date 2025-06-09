import React from 'react';
import Tilty from 'react-tilty';

const BcrumbBannerOne = ({title, paragraph, styleClass, mainThumb, styles}) => {
    return (
        <div className="breadcrum-area breadcrumb-banner">
            <div className="container">
                <div className="section-heading heading-left">
                    <h1 className="title h2" dangerouslySetInnerHTML={{__html: title}}></h1>
                    <p dangerouslySetInnerHTML={{__html: paragraph}}></p>
                </div>
                {/* <div className={`banner-thumbnail ${styleClass}`} style={styles ? styles : {}}>
                    <Tilty perspective={2000} reset={false}>
                        <img  src={mainThumb} width={850} height={600} alt="Illustration" />
                    </Tilty>
                </div> */}
                <div className={`banner-thumbnail ${styleClass}`} style={{ top: '150px',right:"100px", ...(styles || {}) }}>
                    <Tilty perspective={2500} reset={false}>
                        <img  src={mainThumb} width={830} height={600} alt="Illustration" />
                    </Tilty>
                </div>
            </div>
            <ul className="shape-group-8 list-unstyled">
                <li className="shape shape-2">
                    <img  src={"/images/Mythos-website-48.png"} alt="Bubble" />
                </li>
               
            </ul>
        </div>
    )
}

export default BcrumbBannerOne;