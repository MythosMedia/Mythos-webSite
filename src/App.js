import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ScrollToTop from './component/scrollToTop/ScrollToTop';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './assets/scss/app.scss';
import LoaderMythos from './component/loader/LoaderMythos';
import BlogDetails from './pages/BlogDetails';
import MythosSpy from './pages/MythosSpy';

const CreativeAgency = React.lazy(() => import('./pages/CreativeAgency'));
const ServiceTwo = React.lazy(() => import('./pages/ServiceTwo'));
const ProjectDetails = React.lazy(() => import('./pages/ProjectDetails'));
const AboutUs = React.lazy(() => import('./pages/AboutUs'));
const TeamDetails = React.lazy(() => import('./pages/TeamDetails'));
const Contact = React.lazy(() => import('./pages/Contact'));
const ErrorPage = React.lazy(() => import('./pages/404'));
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy'));
const ProjectGridTwo = React.lazy(() => import('./pages/ProjectGridTwo'));
const DataDel = React.lazy(() => import('./pages/DataDel'));
const BlogGridView = React.lazy(() => import('./pages/BlogGrid'));

const App = () =>  {
  return (
    <Router basename="/">
      <ScrollToTop>
        <Suspense fallback={<LoaderMythos/>}>
          <Routes>
            <Route path="/" element={<CreativeAgency />} />
            <Route path="/service-two" element={<ServiceTwo />} />
            <Route path="/project-details/:slug" element={<ProjectDetails />} />
            <Route path="/projects" element={<ProjectGridTwo />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/team-details/:slug" element={<TeamDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/data-deletion-request" element={<DataDel />} />
            <Route path={"/blog"} element={<BlogGridView />}/>
            <Route path={"/blog-details/:slug"} element={<BlogDetails />}/>
            <Route path={"/mythospy"} element={<MythosSpy />}/>

            {/* <Route path="/test" element={<Test />} /> */}
            {/* <Route path="/test" element={<Test />} /> */}
            <Route path="*" element={<ErrorPage />} />
            {/* Other routes can be added here with their respective elements */}
          </Routes>
        </Suspense>
      </ScrollToTop>
    </Router>
  )
}

export default App;
