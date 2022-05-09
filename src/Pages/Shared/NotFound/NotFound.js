import React from 'react';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='not-found-page'>
            <h1
                style={{
                    textAlign: 'center', color: 'red', fontSize: '100px', fontFamily: 'monospace'
                }}
            >404
            </h1>
            <p>PAGE NOT FOUND</p>

        </div>
    );
};

export default NotFound;