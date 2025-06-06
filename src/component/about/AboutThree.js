import React from 'react';

import SectionTitle from '../../elements/section-title/SectionTitle';

const Datas = [
    {
        id: 1,
        title: "Integrity",
        para: "We prioritize transparency and honesty in every project. When you work with us, you can trust that we’ll always act in your best interest, maintaining clear communication and ethical standards."
    },
    {
        id: 2,
        title: "Innovation",
        para: "We don’t just follow trends; we set them. Our team is fueled by innovation, crafting solutions that aren’t just cutting-edge—they’re the edge."
    },
    {
        id: 3,
        title: "Quality",
        para: "Good enough isn’t in our vocabulary. We’re obsessed with perfection, and it shows in everything we touch. When you choose us, you’re choosing a relentless pursuit of quality that leaves no detail overlooked."
    },
    {
        id: 4,
        title: "Collaboration",
        para: "We don’t work for you; we work with you. Think of us as an extension of your team—partners in your vision, co-creators of your success. Together, we make magic happen, one collaborative step at a time."
    },
    {
        id: 5,
        title: "Client-Centricity",
        para: " We’re here to elevate your ambitions. Our client-centric approach means your goals become our mission, and we won’t stop until your vision is not only realized but amplified."
    }
]




const AboutThree = () => {
    return (
        <div className="section section-padding bg-color-dark pb--80 pb_lg--40 pb_md--20">
            <div className="container">
                {/* <div className='about-shape'></div> */}

                <SectionTitle 
                    subtitle="Our Values"
                    title="Why should you work with us?"
                    description="You need a partner who understands the landscape and anticipates your needs. We combine innovative strategies with data-driven insights to elevate your brand and connect with your audience."
                    textAlignment="heading-left heading-light-left mb--100"
                    textColor=""
                />

                <div className="row">
                    {Datas.map((data) => (
                        <div className="col-lg-4" key={data.id}>
                            <div className="about-quality">
                                <h3 className="sl-number">{data.id}</h3>
                                <h5 className="title">{data.title}</h5>
                                <p>{data.para}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
            <ul className="list-unstyled shape-group-10">
                {/* <li className="shape shape-1"><img loading="lazy" src={"/images/others/circle-1.png"} alt="Circle" /></li> */}
                {/* <li className="shape shape-2"><img loading="lazy" src={"/images/others/line-3.png"} alt="Circle" /></li> */}
                {/* <li className="shape shape-3"><img loading="lazy" src={"/images/others/bubble-5.png"} alt="Circle" /></li> */}
            </ul>
        </div>
    )
}

export default AboutThree;