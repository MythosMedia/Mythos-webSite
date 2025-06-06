import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import ServiceData from "../../data/service/ServiceMain.json";
import { slugify } from '../../utils';

const AllData = ServiceData;

const ServicePropOne = ({ colSize, serviceStyle, itemShow, marginTop,Data }) => {
    // State to hold the index of the currently opened item
    const [openedIndex, setOpenedIndex] = useState(null);

    const toggleOpened = (index) => {
        // Toggle current index or close if it's already open
        setOpenedIndex(openedIndex === index ? null : index);
    };

    const topMargin = (index) => {
        if (marginTop === "yes") {
            if (index === 0) {
                return "mt--200 mt_md--0";
            } else if (index === 1) {
                return "mt--100 mt_md--0";
            } else {
                return "mt--0";
            }
        } else {
            return "";
        }
    };

    const styles = {
        display: '-webkit-box',
        WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
    };

    return (
        <>
            {(Data || AllData).slice(0, itemShow).map((data, index) => (
                <div id='services' className={`${colSize} ${topMargin(index)}`} key={index}>
                    <div className={`services-grid ${serviceStyle}`}>
                        <div className="thumbnail">
                            <img loading="lazy" width={75} src={data.image} alt="icon" />
                        </div>
                        <div className="content">
                            <h5 className="title">
                                <Link aria-label='read more about this service' to={`/service-details/${slugify(data.title)}`}>{data.title}</Link>
                            </h5>
                            <p style={openedIndex === index ? {} : styles}>{data.description}</p>
                            <Link aria-label='read more about this service' onClick={() => toggleOpened(index)} className="more-btn">Find out more</Link>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default React.memo(ServicePropOne);
