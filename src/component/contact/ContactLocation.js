import React from 'react';

import LocationData from '../../data/contact/LocationData.json';
import ImagePlaceholder from '../../common/holders/image/ImagePlaceholder';

const allData = LocationData;

const ContactLocation = () => {
    return (
        <>
            {allData.map((data, index) => (
                <div className="col-lg-4 col-sm-6" key={index}>
                    <div className="office-location">
                        <div className="thumbnail">
                            <ImagePlaceholder src={data.thumb} radius='10px' />
                            {/* <img  src={data.thumb} alt="Office" /> */}
                        </div>
                        <div className="content">
                            <h4 className="title">{data.title}</h4>
                            <p>{data.address}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default ContactLocation;