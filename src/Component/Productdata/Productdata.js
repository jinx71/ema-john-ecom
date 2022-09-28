import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Productdata.css';

const Productdata = () => {
    const [Products, setProducts] = useState([]);
    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(Products => setProducts(Products));
    }, [])


    return (
        <div class="productData">
            {
                Products.map(product => <Product product={product}></Product>)
            }
        </div>
    );
};

export default Productdata;