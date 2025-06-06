import React from 'react';
import './index.css';  // Include your custom styles here

const WebsiteWindow = ({link}) => {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center website-window-container">
        <div className="website-window">
            <iframe src={link} width="100%" height="100%" title="Website Preview" className="website-iframe"></iframe>
        </div>
    </div>
  );
}

export default WebsiteWindow;
