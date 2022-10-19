import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import About from '../Component/About/About';
import Inventory from '../Component/Inventory/Inventory';
import Order from '../Component/Order/Order';
import Shop from '../Component/Shop/Shop';
import Main from '../Layout/Main';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Shop></Shop>,
            },
            {
                path: '/shop',
                element: <Shop></Shop>,
            },
            {
                path: '/order',
                element: <Order></Order>,
            },
            {
                path: '/inventory',
                element: <Inventory></Inventory>
            },
            {
                path: '/about',
                element: <About></About>
            },

        ],
    },

])
