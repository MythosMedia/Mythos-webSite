import React from 'react';
import { Link } from 'react-router-dom';
import TeamData from "../../data/team/TeamData.json";
import { slugify } from '../../utils';

const TeamGridItem = ({ data }) => {
    return (
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
    );
};

const TeamOne = () => {
    const managers = TeamData.filter(data => data.role === 'manager');
    const members = TeamData.filter(data => data.role === 'member');

    // Break members into rows of 3
    const memberRows = [];
    for (let i = 0; i < members.length; i += 3) {
        memberRows.push(members.slice(i, i + 3));
    }

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

                    {/* Render managers */}
                    {managers.map((data) => (
                        <div className="col-xl-6 col-sm-6" key={data.id}>
                            <TeamGridItem data={data} />
                        </div>
                    ))}

                    {/* Render members in rows */}
                    {memberRows.map((row, index) => (
                        <div
                            className={`d-flex flex-wrap ${row.length < 3 ? 'justify-content-center' : ''} w-100`}
                            key={`member-row-${index}`}
                        >
                            {row.map((data) => (
                                <div className="col-xl-4 col-sm-6" key={data.id}>
                                    <TeamGridItem data={data} />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TeamOne;