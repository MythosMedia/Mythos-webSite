import React from 'react';
import { Link } from 'react-router-dom';

import CounterUp from './CounterUp';


const CounterUpTwo = () => {
    return (
        <div className="section section-padding expert-counterup-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="section-heading heading-left">
                            <span className="subtitle">Experts in field</span>
                            <h2>What makes us special?</h2>
                            <p className="mb--50">Mastering the art of strategy, we elevate your brand with precision-driven expertise. Where others follow trends, we create pathways to success.</p>
                            <Link to={"/contact"} className="axil-btn btn-large btn-fill-primary">Reach Out To Us</Link>
                        </div>
                    </div>
                    <div className="col-lg-6 offset-xl-1">
                        <div className="row">
                            <CounterUp colSize="col-sm-6" layoutStyle="counterup-style-2" evenTopMargin="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CounterUpTwo;