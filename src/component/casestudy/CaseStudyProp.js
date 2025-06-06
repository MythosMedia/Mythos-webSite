import React from 'react';
import { Link } from 'react-router-dom';
import Tilty from 'react-tilty';
import CountUp from 'react-countup';
import TrackVisibility from 'react-on-screen';

import CaseStudyData from '../../data/casestudy/CaseStudyData.json';
import { slugify } from '../../utils';

const allData = CaseStudyData;

const CaseStudyProp = () => {
    
    const CaseLeftThumb = ({data}) => {
        return (
            <>
            <div className="col-lg-6">
                <div className={`case-study-featured-thumb thumb-${data.id}`}>
                <Tilty perspective={2000}>
                    <img loading="lazy" src={data.thumb} alt="Case Study" />
                </Tilty>
                </div>
            </div>
            <div className="col-xl-5 col-lg-6 offset-xl-1">
                <div className="case-study-featured">
                <div className="section-heading heading-left">
                    <span className="subtitle">{data.subtitle}</span>
                    <h2 className="title">{data.title}</h2>
                    <p>{data.excerpt}</p>
                    <Link to={`/case-details/${slugify(data.title)}`} className="axil-btn btn-fill-primary btn-large">Read Case Study</Link>
                </div>
                <div className="case-study-counterup">
                    <div className="single-counterup">
                        <div className="count-number h3">
                            <TrackVisibility once>
                                {({isVisible}) => (
                                    <span className="number count">
                                        {isVisible ? <CountUp end={data.count_roi} duration={1} /> : null}
                                    </span>
                                )}  
                            </TrackVisibility>
                            <span className="symbol">%</span>
                        </div>
                        <span className="counter-title">ROI increase</span>
                    </div>
                    <div className="single-counterup">
                        <div className="count-number h3">
                            <TrackVisibility once>
                                {({isVisible}) => (
                                    <span className="number count">
                                        {isVisible ? <CountUp end={data.count_visit} duration={1} /> : null}
                                    </span>
                                )}  
                            </TrackVisibility>
                            <span className="symbol">+</span>
                        </div>
                        <span className="counter-title">Monthly website visits</span>
                    </div>
                </div>
                </div>
            </div>
            </>
        )
    }
    
    const CaseRightThumb = ({data}) => {
        return (
            <>
            <div className="col-lg-6 offset-xl-1 order-lg-2">
                <div className={`case-study-featured-thumb thumb-${data.id}`}>
                <Tilty perspective={2000}>
                    <img loading="lazy" src={data.thumb} alt="Case Study" />
                </Tilty>
                </div>
            </div>
            <div className="col-lg-5 order-lg-1">
                <div className="case-study-featured">
                <div className="section-heading heading-left">
                    <span className="subtitle">{data.subtitle}</span>
                    <h2 className="title">{data.title}</h2>
                    <p>{data.excerpt}</p>
                    <Link to={`/case-details/${slugify(data.title)}`} className="axil-btn btn-fill-primary btn-large">Read Case Study</Link>
                </div>
                <div className="case-study-counterup">
                    <div className="single-counterup">
                        <div className="count-number h3">
                            <TrackVisibility once>
                                {({isVisible}) => (
                                    <span className="number count">
                                        {isVisible ? <CountUp end={data.count_roi} duration={1} /> : null}
                                    </span>
                                )}  
                            </TrackVisibility>
                            <span className="symbol">%</span>
                        </div>
                        <span className="counter-title">ROI increase</span>
                    </div>
                    <div className="single-counterup">
                        <div className="count-number h3">
                            <TrackVisibility once>
                                {({isVisible}) => (
                                    <span className="number count">
                                        {isVisible ? <CountUp end={data.count_visit} duration={1} /> : null}
                                    </span>
                                )}  
                            </TrackVisibility>
                            <span className="symbol">+</span>
                        </div>
                        <span className="counter-title">Monthly website visits</span>
                    </div>
                </div>
                </div>
            </div>
            </>
        )
    }

    return (
        <>
            {allData.map((data) => (
                <div className="row" key={data.id}> 
                    {(data.id % 2  === 0) ? <CaseRightThumb data={data}/> : <CaseLeftThumb data={data}/>}
                </div>
            ))}
        </>
    )
}

export default CaseStudyProp;