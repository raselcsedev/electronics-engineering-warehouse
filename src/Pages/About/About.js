import React from 'react';
import './About.css'
import rasel from '../../images/about/rasel.png'


const About = () => {
    return (
        <div className='about'>
            <div className='align-items-center justify-content-center w-100'>
                <div>
                    <img className='image-container' src={rasel} alt="" />
                </div>
                <div>
                    <h2 className='w-100 '>Md. Rasel Aktar</h2>
                    <p className='container'><small> "I am passionate about things related to HTML5, CSS3, JavaScript, React, React Router and React Firebase. Also, a hardworking professional focused on writing clean codes and learning new things. I am currently searching for the right opportunity where I can work in a friendly environment which will not only help me to progress into full-stack role but also add value to that organization"</small></p>
                    <h3 className='text-success'>Get in Touch</h3>
                    <p className='mb-0'>Email:<small className='text-primary mb-0'>raselcse.dev@gmail.com</small></p>
                    <p className='mt-0'><small>Extension Pallabi, <br /> Dhaka-1216</small></p>

                </div>
            </div>
            
        </div>
    );
};

export default About;