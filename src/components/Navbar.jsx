import { Search } from '@mui/icons-material';
import React from 'react';

const Navbar = () => {
    return (
        <nav className='navbar h-[60px] shadow-md rounded-md relative z-10'>
            <div className='wrapper px-5 py-2 flex justify-between items-center'>
                <div className='flex flex-1 items-center'>
                    <div className='language cursor-pointer text-[1rem]'>En</div>
                    <div className='searchInput border-2 border-lightgray border-solid ml-2 px-2 py-1 rounded focus-within:border-purple-300 transition-all'>
                        <input className='outline-none font-semibold text-gray-700' type="text" name=""/>
                        <Search className='cursor-pointer '/>
                    </div>
                </div>
                <div>2</div>
                <div>3</div>
            </div>
        </nav>
    );
};

export default Navbar;