import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/shearedPage/Navbar';

const MainLayout = () => {
    return (
        <div className='container mx-auto'>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default MainLayout;