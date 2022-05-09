import React from 'react';
import './Footer.css'
import google from '../../../images/social/google.png';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <footer className='text-center mt-5 d-lg-flex justify-content-lg-between bg-black'>
            <div className='contact-us ms-lg-5'>
                <div>
                    <h5 className='mt-2'>ADDRESS</h5>
                    <p><small>New Town Plaza</small></p>
                    <p><small>36/5, sotis chandra lane</small></p>
                </div>
                <div>
                    <h5 className='mt-2'>PHONE</h5>
                    <p className='pt-0'><small>+880012345</small></p>
                    <p className='pt-0'><small>+98943574879330</small></p>
                </div>
                <div>
                    <h5 className='mt-2'>EMAIL</h5>
                    <p><small>rr.dev@yahoo.com</small></p>
                    <p><small>mmm.web@gmail.com</small></p>
                </div>
            </div>
            <div className='copyright me-lg-5 '>
                <h6>get social with me!</h6>
            <img className='google-img' src={google} alt="" />
            <p>copyright <small>&copy; {year}</small></p>
            </div>
        </footer>
    );
};

export default Footer;