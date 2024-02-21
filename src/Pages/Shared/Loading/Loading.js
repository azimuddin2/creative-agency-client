import React from 'react';

const Loading = () => {
    return (
        <div style={{margin:'160px 0px'}} className='d-flex align-items-center justify-content-center'>
            <div style={{color: '#7AB259'}} className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;