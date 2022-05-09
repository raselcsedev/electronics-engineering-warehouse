import React from 'react';
import {Spinner} from 'react-bootstrap';
import './Loading.css'

const Loading = () => {
    return (
        <div className='spinner w-100 d-flex justify-content-center align-items-center'>
            <Spinner animation='border' variant='info' />
        </div>
    );
};

export default Loading;