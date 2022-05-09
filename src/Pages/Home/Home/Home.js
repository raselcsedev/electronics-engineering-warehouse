import React from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import './Home.css'

const Home = () => {
    const navigate = useNavigate();
    const navigateToManageProduct = () =>{
        navigate('/manageProduct')
    }
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <button className='manage-button btn btn-link text-align-center' onClick={()=> navigateToManageProduct()} >Manage Product</button>
        </div>
    );
};

export default Home;