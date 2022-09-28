import React from 'react';
import Cart from '../Cart/Cart';
import Productdata from '../Productdata/Productdata';
import './Shop.css'

const shop = () => {
    return (
        <div class="shop">
            <Productdata></Productdata>
            <Cart></Cart>
        </div>
    );
};

export default shop;