import React, { useState } from 'react';
import './index.css';
import Tilty from 'react-tilty';

function ImageLoader({mainThumb}) {
    const [loading, setLoading] = useState(true);

    const handleImageLoad = () => {
        setLoading(false);  // Update loading state after the image is loaded
    };


    return (
        <Tilty perspective={2000} reset={false}>
        <div className="placeholder-glow" style={{display:loading?'':'none', position: 'relative', width: '100%', borderRadius: '24px', overflow: 'hidden' }}>
        {loading && (
            <div className='glow' style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px' }}>
                 <img
                                       src="/images/mythos-logo-01.png"
                                       className="img-fluid rotating-logo"
                                       width={100}
                                       alt="Logo"
                                       style={{
                                        width: '100px',
                                           position: 'absolute',
                                          
                                           transform: 'translate(-50%, -50%)',
                                       }}
                                   />
            </div>
        )}
    </div>
        <img
            src={mainThumb}
            alt="preloading"
            onLoad={handleImageLoad}
            style={{ display: loading ? 'none' : 'block', width: '100%', height: 'auto', maxWidth: '650px', maxHeight: '450px' }}
        />
        
        </Tilty>
    );
}

export default ImageLoader;
