import React from 'react';
import { Link } from 'react-router-dom';

import { slugify } from '../../../utils';
import '../../../index.css'

const PropOne = ({projectStyle, portfolio}) => {
	
    return (
		<>
			<div className={`project-grid ${projectStyle}`}>
					
					<div className="thumbnail">
							<Link aria-label='link to project detail page' to={`/project-details/${slugify(portfolio.title)}`}>
								<img loading="lazy" src={portfolio.projectImage ?portfolio.projectImage : portfolio.image } alt="mythos media projects" />
							</Link>
					</div>
				<div className="content">
				<h4 className="title"> 
					<Link aria-label='link to project detail page' to={`/project-details/${slugify(portfolio.title)}`}>{portfolio.title}</Link>
				</h4>
				<span className="subtitle">
					{portfolio.category.map((cat, i) => (
						<span key={i}>{cat}</span>
					))}
				</span>
				</div>
			</div>
		</>
    )
}

export default PropOne;