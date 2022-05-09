import React from 'react';
import {useNavigate} from 'react-router-dom';
import './Product.css'
const Product = ({product}) => {
    const {_id, name, img, description,price, supplier,quantity } = product;
    const navigate = useNavigate();
    const navigateToProductDetail = id =>{
        navigate(`/product/${id}`)
    }
    return (
        <div className='product text-dark container text-align-center'>
            <div >
            <img style={{height:'200px'}} className='image-container mb-2' src={img} alt="" />
            </div>
            <div className='align-content-around'>
            <div>
            <h3 style={{height:'100px'}} className=' text-center'>{name}</h3>
            </div>
            <div className='mt-3 mb-0'>
            <button className='btn btn-info w-100 mx-auto text-align-center' onClick={()=> navigateToProductDetail(_id)} >Update</button>
            </div>
            </div>
        </div>
    );
};

export default Product;