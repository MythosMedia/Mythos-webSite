import React from 'react';
import { Link } from 'react-router-dom';



const BreadCrumbOne = ({title, page,styles={}}) => {
    return (
        <div className="breadcrum-area" >
            <div className="container">
                <div className="breadcrumb">
                    <ul className="list-unstyled">
                        <li>
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li className="active" dangerouslySetInnerHTML={{__html: page}}></li>
                    </ul>
                    <h1 style={styles} className="title h2" dangerouslySetInnerHTML={{__html: title}}></h1>
                </div>
            </div>
            <ul className="shape-group-8 list-unstyled">
                {/* <li className="shape shape-1"><img loading="lazy" src={"/images/others/bubble-9.png"} alt="Bubble" /></li> */}
                <li className="shape shape-2"><img loading="lazy" src={"/images/Mythos-website-48.png"} width="300" height={300} alt="Bubble" /></li>
                {/* <li className="shape shape-3"><img loading="lazy" src={"/images/others/line-4.png"} alt="Line" /></li> */}
            </ul>
        </div>
    )
}

export default BreadCrumbOne;