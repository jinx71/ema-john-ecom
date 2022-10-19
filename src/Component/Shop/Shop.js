import Cart from '../Cart/Cart';
import Productdata from '../Productdata/Productdata';
import './Shop.css'
import React, { useEffect, useState } from 'react';
import { addToDB, deleteShoppingCart, getStoredCart } from '../utilities/fakeDB2';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(Products => setProducts(Products));
    }, [])
    const addtocart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDB(product.id);
        console.log('added)');
    }
    useEffect(() => {
        const storedCart = getStoredCart();
        let savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }

        }
        setCart(savedCart);

    }, [products])
    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart()
    }
    return (
        <div class="shop">
            <Productdata products={products} cartHandler={addtocart}></Productdata>
            <Cart cart={cart} handleClearCart={handleClearCart}></Cart>
        </div>
    );
};

export default Shop;