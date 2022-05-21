import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import './ProductDetail.css'

const ProductDetail = () => {
    const {productId} = useParams();
    const [product, setProduct] = useState({});
    useEffect(()=>{
        const url = `https://stark-atoll-21313.herokuapp.com/product/${productId}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[]);

    const navigate = useNavigate();
    const navigateToManageProduct = () =>{
        navigate('/manageProduct')
    };
    
    return (
        <div className='container'>
            <img className='product-container mt-5 ' src={product.img} alt="" />
            <div className=' mt-2 '>
            <h2>Name : {product.name}</h2>
            <h5>Supplier Name : {product.supplier}</h5>
            <h5>Price : {product.price}$</h5>
            <h5>Quantity : {product.quantity}</h5>
            <h6>Description : {product.description}</h6>

            </div>

            <button className='manage-button btn btn-link text-align-center' onClick={()=> navigateToManageProduct()} >Manage Products</button>
        </div>
    );
};

export default ProductDetail;