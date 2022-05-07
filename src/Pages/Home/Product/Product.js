import React from 'react';
import './Product.css'
const Product = ({product}) => {
    const {name, img, description,price } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p><small>{price}</small></p>
            <p>{description}</p>
            <button>Delivery</button>
        </div>
    );
};

export default Product;