import React from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url = `https://stark-atoll-21313.herokuapp.com/product`;
        fetch(url, {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
            console.log(result);
        })
    };
    return (
        <div className='w-50 mx-auto'>
            <h2>Add product</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='name' className='mb-3' {...register("Name",{required: true})} />
                <input placeholder='price' className='mb-3' type='number' {...register("Price",{required: true})} />
                <input placeholder='quantity' className='mb-3' type='number' {...register("Quantity",{required: true})} />
                <textarea placeholder='description' className='mb-3' {...register("Description",{required: true})} />
                
                <input type="submit" value='Add Product' />
            </form>
        </div>
    );
};

export default AddProduct;
