import React, { useState } from 'react';
import { Placeholder } from 'react-bootstrap';
import './index.css'

function ImagePlaceholder({ src, height = '275px',radius='10px' }) { // Default height of 200px
    const [imageLoaded, setImageLoaded] = useState(false);

 
    return (
        <div className="image-container" style={{ width: '100%', position: 'relative', height: imageLoaded ? 'auto' : height ,borderRadius:'24px' }}>
            {!imageLoaded && (
                <Placeholder as="div" animation="glow" style={{ position: 'absolute', width: '100%', height: '100%',background:'gray',borderRadius:radius}}>
                    <Placeholder xs={12} style={{ height: '100%' }} />
                    <img
                                       src="/images/mythos-logo-01.png"
                                       className="img-fluid rotating-logo-loader2"
                                       width={100}
                                       alt="Logo"
                                       style={{
                                        width: '100px',
                                           position: 'absolute',
                                           transform: 'translate(-50%, -50%)',
                                           top: '50%',
                                             left: '50%',
                                       }}
                                   />
                </Placeholder>
            )}
                <img
                    alt='preloading'
                    src={src}
                    onLoad={() => setImageLoaded(true)}
                    style={{ display: imageLoaded ? 'block' : 'none', width: '100%', height: '270px' }}
                    fluid
                />
        </div>
    );
}

export default ImagePlaceholder;
