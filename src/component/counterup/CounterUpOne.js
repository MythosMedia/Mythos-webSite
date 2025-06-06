import React from 'react';

import SectionTitle from '../../elements/section-title/SectionTitle';
import CounterUp from '../../component/counterup/CounterUp';


const CounterUpOne = () => {
    return (
        <div className="section section-padding bg-color-dark">
            <div className="container">
            <SectionTitle 
                    // subtitle="Featured Case Study"
                    title="CREATE YOUR MYTHOS"
                    description="We Are One Of North America's Leaders in Industry-Specialized Digital Marketing 
                    We Know That Every Industry Is Unique. Choose Experts Who Understand Your Business."
                    textAlignment="heading-light"
                    textColor=""
                />
                <div className="row">
                    <CounterUp colSize="col-lg-3 col-6" layoutStyle="" evenTopMargin="" />
                </div>
                <div className="above-shape-6">
                    {/* <img loading="lazy" src={"/images/landing/sec-5-hand.svg"} width={150} height={150} alt="shape" /> */}
                    
                </div>

             

            </div>
        </div>
    )
}


export default CounterUpOne;