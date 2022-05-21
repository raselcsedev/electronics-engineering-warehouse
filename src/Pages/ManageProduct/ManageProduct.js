import React, { useEffect, useState } from 'react';
import './ManageProduct.css'
const ManageProduct = () => {
    const [products, setProducts] = useState([]);
    useEffect( ()=>{
        fetch('https://stark-atoll-21313.herokuapp.com/product')
        .then(res=>res.json())
        .then(data=> setProducts(data))
    },[]);
    const handleDelivery = (id) =>{
        const delivery = window.confirm('are you sure?');
        if(delivery){
            const url = `https://stark-atoll-21313.herokuapp.com/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res=> res.json())
            .then(data=>{
                console.log(data);
                const remaining = products.filter(product=> product._id !== id);
                setProducts(remaining);
            })
        }
    }
    return (
        <div>
            <h1 className='container mb-5 mx-auto text-info'>Manage Product</h1>
            {
                products.map(product => <div key={product._id}>
                    <div className='manage-container container '>
                    <h5 className='text-info mb-2'>{product.name}</h5>
                    <p className=' mb-2'>{product.price}</p> 
                    <p className=' mb-2'>{product.quantity}</p>
                    <button className='btn btn-info mb-2 w-50 text-align-center' onClick={()=> handleDelivery(product._id) } >Delete</button>

                    </div>
                </div>)
            }
            
        </div>
    );
};

export default ManageProduct;