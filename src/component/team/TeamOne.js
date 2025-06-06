import React from 'react';
import { Link } from 'react-router-dom';

import TeamData from "../../data/team/TeamData.json";
import { slugify } from '../../utils';

const TeamGridItem = ({ data, colClass }) => {
    return (
        <div className={colClass} key={data.id}>
            <div className="team-grid">
                {data.thumb ? (
                    <div className="thumbnail">
                        <Link to={`/team-details/${slugify(data.title)}`}>
                            <img loading="lazy" src={data.thumb} alt={data.title} />
                        </Link>
                    </div>
                ) : (
                    <div className="avatar-container">
                        <div className="avatar-wrapper">
                            <span>{data.title.trim().charAt(0)}</span>
                        </div>
                    </div>
                )}
                <div className="content">
                    <h4 className="title">
                        <Link to={`/team-details/${slugify(data.title)}`}>
                            {data.title}
                        </Link>
                    </h4>
                    <span className="designation" dangerouslySetInnerHTML={{ __html: data.designation }}></span>
                </div>
            </div>
        </div>
    );
};

const TeamOne = () => {
    return (
        <div className="section section-padding bg-color-dark pb--70 pb_lg--20 pb_md--0">
            <div className="container">
                <div className="section-heading heading-light">
                    <span className="subtitle">Our values</span>
                    <h2 className="title mb--50">Meet The Team</h2>
                    <p>Meet the minds behind the magic. Hiring us means bringing onboard a team of innovators who blend expertise and creativity!.</p>
                </div>
                <div className="row">
                    <div className="logo-shape">
                        <img loading="lazy" src="/images/mythos-logo-01.png" alt="Logo" />
                    </div>
                    <div className="logo-shape1">
                        <img loading="lazy" src="/images/deco555.png" alt="Decoration" />
                    </div>
                    {TeamData.map((data) => (
                        <React.Fragment key={data.id}>
                            {data.role === 'manager' && (
                                <TeamGridItem data={data} colClass="col-xl-6 col-sm-6" />
                            )}
                            {data.role === 'member' && (
                                <TeamGridItem data={data} colClass="col-xl-4 col-sm-6" />
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TeamOne;
