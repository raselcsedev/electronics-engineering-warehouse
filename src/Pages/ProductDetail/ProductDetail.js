import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import './ProductDetail.css'

const ProductDetail = () => {
    const {productId} = useParams();
    const [product, setProduct] = useState({});
    useEffect(()=>{
        const url = `https://stark-atoll-21313.herokuapp.com/product/${productId}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])
    return (
        <div>
            <img className='image-container container mt-5 ' src={product.img} alt="" />
            <div className='container mt-2 '>
            <h2>Name : {product.name}</h2>
            <h5>Supplier Name : {product.supplier}</h5>
            <p>Description : {product.description}</p>
            <p>Price : {product.price}$</p>
            <p>Quantity : {product.quantity}</p>

            </div>
        </div>
    );
};

export default ProductDetail;