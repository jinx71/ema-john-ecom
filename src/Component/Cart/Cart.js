import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';


const Cart = (props) => {
    // console.log(props.cart)
    let quantity = 0;
    let total = 0;
    let shipping = 0;
    for (const product of props.cart) {
        quantity = quantity + product.quantity;
        total = total + (product.price * quantity);
        shipping = shipping + (product.shipping * quantity);
    }
    let tax = parseFloat((total * 0.1).toFixed(2));
    let grandTotal = total + shipping + tax;
    return (
        <div class="cart">
            <h1>Order Summary</h1>
            <p>Selected Items : {quantity}</p>
            <p>Total Price ${total}</p>
            <p>Total shipping charge :  ${shipping}</p>
            <p>Tax : ${tax}</p>
            <h2>Grand Total : ${grandTotal}</h2>
            <button onClick={props.handleClearCart}>Clear Cart</button>
            <Link to="/order"><button>Review Order</button></Link>
        </div>
    );
};

export default Cart;