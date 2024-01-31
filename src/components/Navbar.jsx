import { AddShoppingCartOutlined, Search } from '@mui/icons-material';
import { Badge } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar h-[60px] shadow-md rounded-md relative z-10'>
            <div className='wrapper px-5 py-2 flex justify-between items-center'>
                {/* Left side */}
                <div className='flex flex-1 items-center'>
                    <div className='language cursor-pointer text-[1rem]'>En</div>
                    <div className='searchInput border-2 border-lightgray border-solid ml-2 px-2 py-1 rounded focus-within:border-purple-300 transition-all'>
                        <input className='outline-none font-semibold text-gray-700' type="text" name=""/>
                        <Search className='cursor-pointer '/>
                    </div>
                </div>

                {/* center logo */}
                <div className='flex flex-1 items-center justify-center'>
                    <h2 className='font-semibold text-xl font-serif'>Winter Shops</h2>
                </div>

                {/* Right side */}
                <div className='flex flex-1 items-center justify-end'>
                    <Link className='font-semibold text-lg ml-3' to = "/register">Register</Link>
                    <Link className='font-semibold text-lg ml-3' to = "/signin">Sign in</Link>
                    <Link className='font-semibold text-lg ml-3' to = "/signin">
                        <Badge color='primary' badgeContent={2}><AddShoppingCartOutlined/></Badge>
                    </Link>
                                     
                </div>
            </div>
        </nav>
    );
};

export default Navbar;