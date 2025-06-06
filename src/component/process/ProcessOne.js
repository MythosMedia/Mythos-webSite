import React from 'react';
import Tilty from 'react-tilty';

import SectionTitle from '../../elements/section-title/SectionTitle';
import ProcesstData from "../../data/process/ProcessData.json";

const getProcesstData = ProcesstData;

const ProcessOne = () => {
    return (
        
        <div className="section section-padding  pb--70">
            <SectionTitle 
                subtitle="Process"
                title="Our process"
                description="A seamless journey from vision to execution, where every step drives your brand's success."
                textAlignment=""
                textColor="mb--90"
            />
            <div className="container">
                {getProcesstData.map((data) => (
                    <div key={data.id} className={`process-work ${(data.id % 2  === 0) ? "content-reverse" : ""}`}>
                        <Tilty perspective={2000}>
                            <div className="thumbnail">
                                <img loading="lazy" src={data.thumb}  alt="Thumbnail" />
                            </div>
                        </Tilty>
                    <div className="content">
                        <span className="subtitle">{data.subtitle}</span>
                        <h3 className="title">{data.title}</h3>
                        <p>{data.paragraph}</p>
                    </div>
                </div>
                ))}
            </div>
          
        </div>
    )
}

export default ProcessOne;