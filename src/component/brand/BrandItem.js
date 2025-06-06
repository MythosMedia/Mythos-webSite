import React from 'react';

const Data = [
    {
        image: "/images/brand/brand-1.png"
    },
    {
        image: "/images/brand/brand-2.png"
    },
    {
        image: "/images/brand/brand-3.png"
    },
    {
        image: "/images/brand/brand-4.png"
    },
    
]


const BrandItem = () => {
    return (
        <>
            {Data.map((data, index) => (
                <div className="col-lg-3 col-6" key={index}>
                    <div className="brand-grid">
                        <img loading="lazy" src={data.image} alt="mythos media clients logo" />
                    </div>
                </div>
            ))}
        </>
    )
}

export default BrandItem;