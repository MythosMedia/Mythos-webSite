import React from 'react';
import CountUp from 'react-countup';
import TrackVisibility from 'react-on-screen';

const Data = [
    {  
        id: 1,
        light_icon: "/images/icon/icon-7.png",
        dark_icon: "/images/icon/icon-10.png",
        countNum:5,
        text: "Years of operation"
    },
    {  
        id: 2,
        light_icon: "/images/icon/icon-8.png",
        dark_icon: "/images/icon/icon-11.png",
        countNum: 100,
        text: "Projects delivered"
    },
    {  
        id: 3,
        light_icon: "/images/icon/icon-9.png",
        dark_icon: "/images/icon/icon-12.png",
        countNum: 5,
        text: "Specialists"
    },
    {  
        id: 4,
        light_icon: "/images/icon/apple.png",
        dark_icon: "/images/icon/apple-black.png",
        countNum: 55,
        text: "Clients"
    }
   
];

const CounterUp = ({colSize, layoutStyle, evenTopMargin}) => {

    return (
        <>
            {Data.map((data) => (
                <div className={`${colSize} ${(data.id % 2  === 0) ? evenTopMargin : ""}`} key={data.id} >
                    <div className={`counterup-progress ${layoutStyle}`}>


                        <div className="count-number h2">
                            <TrackVisibility once>
                                {({isVisible}) => (
                                    <span className="number count">
                                        {isVisible ? <CountUp end={data.countNum} duration={1} /> : null}
                                    </span>
                                )}  
                            </TrackVisibility>
                            <span className="symbol">+</span>
                        </div>
                        <h6 className="title">{data.text}</h6>
                    </div>
                </div>
            ))}
        </>
    )
}



export default CounterUp;