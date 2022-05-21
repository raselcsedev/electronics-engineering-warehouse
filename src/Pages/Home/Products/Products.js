import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect( ()=>{
        fetch('https://stark-atoll-21313.herokuapp.com/product')
        .then(res=>res.json())
        .then(data=> setProducts(data))
    },[])
    return (
        <div id='products' className='products-title'>
            <h1 className= 'mx-auto text-info mb-3'>Our Available Products</h1>
            <div className='products-container'>
            {
                products.slice(0,6).map(product => <Product
                    key={product._id}
                    product = {product}
                ></Product>)
            }
            </div>
        </div>
    );
};

export default Products;