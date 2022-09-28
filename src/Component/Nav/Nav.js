import React from 'react';
import Logo from '../../logo.svg';
import './Nav.css';

const Nav = () => {
    return (
        <nav>
            <div>
                <img src={Logo} alt="" srcset="" />
            </div>
            <div>
                <ul>
                    <li>Order</li>
                    <li>Order Review</li>
                    <li>Manage Inventory</li>
                    <li>login</li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;