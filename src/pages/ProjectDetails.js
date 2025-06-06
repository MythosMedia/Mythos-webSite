import React from 'react';
import {Link, useParams} from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import { FaCompress, FaCode, FaGlobe } from 'react-icons/fa';

import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import BcrumbBannerTwo from '../elements/breadcrumb/BcrumbBannerTwo';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import { slugify } from '../utils';
import ProjectData from "../data/project/ProjectData.json";
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import SEO from '../common/SEO';
import ImageSection from '../component/ImageSection/ImageSection';
import FullWidthImageSection from '../component/common/FullWidthImageSection';
import WebsiteWindow from '../component/IframeWebsite/WebsiteWindow';

const allProjectData = ProjectData;

const ProjectDetails = () => {

    const params = useParams();
    const projectSlug = params.slug;
    const getProjectData = allProjectData.filter(data => slugify(data.title) === projectSlug);
    const detailsProject = getProjectData[0];


    return (
        <>
        <SEO title="Project Details"/>
        <ColorSwitcher />
        <main className="main-wrapper">
            <HeaderOne />
            <BcrumbBannerTwo 
            title={detailsProject.name}
            paragraph ={detailsProject.excerpt}
            mainThumb={detailsProject.image}
            />
            <section className="section-padding single-portfolio-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="section-heading heading-left mb-0">
                                <span className="subtitle">
                                    {detailsProject.category.map((cat, i) => (
                                            <span key={i}>{cat}</span> 
                                        )
                                    )}
                                </span>
                                <h3 className="title">{detailsProject.name}</h3>
                            </div>
                            {detailsProject.body.map((para, index) => (
                                <p key={index} dangerouslySetInnerHTML={{__html: para}}></p>
                            ))}
                            <Link aria-label='link to contact page' to="/contact" className="axil-btn btn-fill-primary">Reach Out Now</Link>
                        </div>
                        <div className="col-lg-6 offset-xl-1">
                            <div className="why-choose-us">
                                <div className="section-heading heading-left">
                                    <h3 className="title">We delivered</h3>
                                    <p>{detailsProject.Wedelivered}</p>
                                </div>
                                <Accordion defaultActiveKey="1">
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header><FaCompress /> {detailsProject['process-1'][0]}</Accordion.Header>
                                        <Accordion.Body>
                                        {detailsProject['process-1'][1]}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header><FaCode /> {detailsProject['process-2'][0]}</Accordion.Header>
                                        <Accordion.Body>
                                        {detailsProject['process-2'][1]}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header><FaGlobe /> {detailsProject['process-3'][0]}</Accordion.Header>
                                        <Accordion.Body>
                                        {detailsProject['process-3'][1]}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ImageSection subImage1={detailsProject['subimage-1']} subImage2={detailsProject['subimage-2']} />
            {/* <GridImageSection mainImage={detailsProject.mainImage} gridImages={detailsProject.gridImages} /> */}
            <FullWidthImageSection image={detailsProject.mainImage}/>
            <ImageSection subImage1={detailsProject['subimage-3']} subImage2={detailsProject['subimage-4']} />
            <WebsiteWindow link={detailsProject.link} />
            {
                detailsProject.mainImage2 && <FullWidthImageSection image={detailsProject.mainImage2}/>
            }
            <ImageSection subImage1={detailsProject['subimage-5']} subImage2={detailsProject['subimage-6']} />
            {
                detailsProject.mainImage3 && <FullWidthImageSection image={detailsProject.mainImage3} styles={{height:"500px"}} />
            }
            
            <CtaLayoutOne />
        <FooterOne parentClass="" />
        </main>
        </>
    )
}

export default ProjectDetails;