import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../logo.svg';
import './Nav.css';

const Nav = () => {
    return (
        <nav>
            <div>
                <Link to="/"><img src={Logo} alt="" srcset="" /></Link>
            </div>
            <div class="navigation">

                <Link to="/shop">Shop</Link>
                <Link to='/order'>Order</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
            </div>
        </nav>
    );
};

export default Nav;