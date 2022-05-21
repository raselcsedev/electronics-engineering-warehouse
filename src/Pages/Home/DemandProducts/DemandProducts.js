import React from 'react';
import './DemandProducts.css'

const DemandProducts = () => {
    return (
        <div >
            <h1 className='demandProduct-title mx-auto text-info mb-5 mt-5' >Our Most Demand Products</h1>
            <div className='demandProduct-container container'>
                <div className='text-dark text-align-center '>
                    <div >
                        <img style={{ height: '150px' }} className='image-container mb-2' src="https://assets.epicurious.com/photos/609e9d9848cd17a4fcdbf149/16:9/w_2560%2Cc_limit/The-Best-Electric-Kettle-11042018_V1.jpg" alt="" />
                    </div>
                    <div className='align-content-around'>
                        <div>
                            <h3 className=' text-center'>Electric Kettle</h3>
                            <p>The best electric kettles come with serious perks for the committed coffee or tea drinkers: They boil water nearly twice as fast as conventional kettles...</p>
                            
                        </div>
                    </div>
                </div>
                <div className='text-dark text-align-center '>
                    <div >
                        <img style={{ height: '150px'}} className='image-container mb-2' src="https://pyxis.nymag.com/v1/imgs/777/f2c/7c27d8ed120befcbe8a2e09b75c10638e5-24-blender.jpg" alt="" />
                    </div>
                    <div className='align-content-around'>
                        <div>
                            <h3 className=' text-center'>Blenders</h3>
                            <p>Blenders can pure vegetables into soup, crush nuts into butter, whir dressings and sauces into silky emulsifications, chop ingredients into salsas, and, of course, make smoothies. </p>
                        </div>
                    </div>
                </div>
                <div className='text-dark text-align-center '>
                    <div >
                        <img style={{ height: '150px' }} className='image-container mb-2' src="https://www.electrolux.co.id/globalassets/5-support/blog-id/37.jpg" alt="" />
                    </div>
                    <div className='align-content-around'>
                        <div>
                            <h3 className=' text-center'>Hand Mixer</h3>
                            <p>A manual or electrical kitchen utensil that consists of a set of beaters attached to a gear driven mechanism to rotate the blades of the beaters.</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default DemandProducts;