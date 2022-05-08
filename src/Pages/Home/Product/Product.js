import React from 'react';
import {useNavigate} from 'react-router-dom';
import './Product.css'
const Product = ({product}) => {
    const {id, name, img, description,price } = product;
    const navigate = useNavigate();
    const navigateToProductDetail = id =>{
        navigate(`/product/${id}`)
    }
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p><small>{price}</small></p>
            <p>{description}</p>
            <button onClick={()=> navigateToProductDetail(id)} >Update</button>
        </div>
    );
};

export default Product;