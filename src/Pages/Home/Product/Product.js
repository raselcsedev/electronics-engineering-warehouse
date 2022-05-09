import React from 'react';
import {useNavigate} from 'react-router-dom';
import './Product.css'
const Product = ({product}) => {
    const {id, name, img, description,price, supplier,quantity } = product;
    const navigate = useNavigate();
    const navigateToProductDetail = id =>{
        navigate(`/product/${id}`)
    }
    return (
        <div className='product text-dark '>
            <div>
            <img className='image-container w-100' src={img} alt="" />
            </div>
            <div className='align-content-around'>
            <div>
            <h3 className='text-info'>{name}</h3>
            <p >{description}</p>
            <h6>Price:<small> {price}$</small></h6>
            <h6>Supplier Name:<small> {supplier}</small></h6>
            <h6>Quantity:<small> {quantity}</small></h6>
            </div>
            <div className='mt-3 mb-0'>
            <button className='btn btn-info w-50 text-align-center' onClick={()=> navigateToProductDetail(id)} >Update</button>
            </div>
            </div>
        </div>
    );
};

export default Product;