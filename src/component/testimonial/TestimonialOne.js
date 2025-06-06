import React from 'react';

import SectionTitle from '../../elements/section-title/SectionTitle';
import TestimonialPropOne from './TestimonialPropOne';

const TestimonialOne = () => {
    return (
        <div className="section section-padding">
            <div className="container">
                <SectionTitle 
                    subtitle="Testimonials"
                    title="Client Success Stories"
                    description="Hear from our clients who have transformed their businesses with our support and expertise."
                    textAlignment="heading-centre"
                    textColor=""
                />
                <div className="row">
                    <TestimonialPropOne colSize="col-lg-12" itemShow="3"/>
                </div>
            </div>
            <ul className="shape-group-4 list-unstyled">
                <li className="above-shape-7">
                    <img alt="mythos media shape" loading="lazy" src={"/images/landing/sec-4-ts.svg"} width={200} height={200}  />
                </li>
                <li className="above-shape-5">
                    <img alt="mythos media shape" loading="lazy" src={"/images/landing/sec-4-ts2.svg"} width={150} height={150}  />
                </li>
            </ul>
        </div>
    )
}

export default TestimonialOne;