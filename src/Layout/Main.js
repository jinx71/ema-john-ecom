import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Component/Nav/Nav';

const Main = () => {
    console.log("HGello")
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>

        </div>
    );
};

export default Main;