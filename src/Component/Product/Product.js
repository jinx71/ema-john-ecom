import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css';


const Product = (props) => {
    const { img, name, price, ratings, seller } = props.product;

    return (
        <div class="productCard">
            <div className="productDetails">
                <div>
                    <img src={img} alt="" />
                </div>
                <div>
                    <h3>{name}</h3>
                    <h4>Price: ${price} </h4>
                </div>
                <div>
                    <small>Manufacturer : {seller}</small> <br></br>
                    <small>Rating : {ratings} stars</small>
                </div>
            </div>
            <button onClick={() => props.cartHandler(props.product)}>Add To Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
        </div>
    );
};

export default Product;