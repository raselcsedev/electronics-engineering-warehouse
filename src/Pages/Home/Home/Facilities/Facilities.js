import React from 'react';
import './Facilities.css'

const Facilities = () => {
    return (
        <div >
            <h1 className='facilities-title mx-auto text-info mb-5 mt-5' >Our Facilities</h1>
            <div className='facilities-container container'>
                <div className='text-dark text-align-center '>
                    <div >
                        <img style={{ height: '150px' }} className='facilities-img-container mb-2' src="https://techbondit.com/public/techbond/lifetime-support.jpg" alt="" />
                    </div>
                    <div className='align-content-around'>
                        <div>
                            <h3>Life TIme Support</h3>
                            <p>We offer technical support for the entire product lifetime and up to seven years after a product has been discontinued.</p>
                        </div>
                    </div>
                </div>
                <div className='text-dark text-align-center '>
                    <div >
                        <img style={{ height: '150px'}} className='facilities-img-container mb-2' src="https://techbondit.com/public/techbond/24-7-support-500x500.png" alt="" />
                    </div>
                    <div className='align-content-around'>
                        <div>
                            <h3>24/7 Online Support</h3>
                            <p>Our top support team is always here for the newbies whenever they are in issues. You will find them 24/7 at your services.</p>
                        </div>
                    </div>
                </div>
                <div className='text-dark text-align-center '>
                    <div >
                        <img style={{ height: '150px' }} className='facilities-img-container mb-2' src="https://techbondit.com/public/techbond/lab-support1.png" alt="" />
                    </div>
                    <div className='align-content-around'>
                        <div>
                            <h3>Backup</h3>
                            <p>We have enriched our technical facilitated with all necessary facilities where customers can repair their products.  </p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Facilities;