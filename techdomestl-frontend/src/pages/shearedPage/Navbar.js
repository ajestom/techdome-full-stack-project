 import React from 'react';
import { NavLink } from 'react-router-dom';
 
 const Navbar = () => {
    return (
        <div className='h-20 flex justify-end items-center  px-10 lg:px-20'>
            <div className='flex gap-5 font-normal'>
                <NavLink to="/blog" className={({isActive})=> isActive ?"bg-black py-1 px-4 rounded text-white" :"py-1 px-4"}>Blog</NavLink>
                <NavLink to="/register" className={({isActive})=> isActive ?"bg-black rounded text-white py-1 px-4" :"py-1 px-4"}>Signup</NavLink>
                <NavLink to="/" className={({isActive})=> isActive ?"bg-black rounded text-white py-1 px-4" :"py-1 px-4"}>Login</NavLink>
            </div>
        </div>
    );
 };
 
 export default Navbar;