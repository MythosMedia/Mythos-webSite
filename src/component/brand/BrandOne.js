import React from 'react';

import SectionTitle from '../../elements/section-title/SectionTitle';
import BrandItem from './BrandItem';


const BrandOne = () => {
    return (
        <div className="section section-padding-2 bg-color-dark">
        <div className="container" >
            <SectionTitle 
                subtitle="Top Clients"
                title="We’ve built solutions for..."
                description="Highlighting our work with top clients, where we've delivered impactful solutions to meet their unique needs and objectives."
                textAlignment="heading-light-left"
                textColor=""
            />
            <div className='row'>
               <BrandItem />
            </div>
        </div>
        <ul className="list-unstyled ">
                    <li className="above-shape-12">
                        <img loading="lazy" src={"/images/landing/sec-4-strip.svg"}  alt="mythos media shape" />
                        </li>
        </ul>
        <div className="above-shape-8">
            <img loading="lazy" src="/images/landing/sec-6-logo.png"  alt="mythos media shape" />
        </div>
    </div>
    )
}

export default BrandOne;