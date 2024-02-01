import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import React, { useState } from 'react';

const Product = ({ product }) => {
    
    const [hoverEffect, setHoverEffect] = useState(' opacity-0');
    const iconStyle = 'h-[40px] w-[40px] rounded-full bg-white flex items-center justify-center m-3 hover:bg-[#894af3] hover:text-white hover:scale-[1.1] ease-in duration-100 cursor-pointer'

    const handleMouseHover = () =>{
        setHoverEffect(' opacity-1 bg-[rgba(0,0,0,0.2)]')
    }
    const handleMouseLeave = () =>{
        setHoverEffect(' opacity-0')
    }

    return (
        <div className="flex items-center justify-center flex-1 min-w-[280px] min-h-[350px] m-2 overflow-hidden rounded-md shadow-lg relative" onMouseEnter={handleMouseHover} onMouseLeave={handleMouseLeave}>
            <img src={product.src} alt="product" />
            <div className= {`flex items-center justify-center absolute w-[100%] h-[100%] ease-in duration-100 ${hoverEffect}`}>
                <div className={iconStyle}>
                    <ShoppingCartOutlined />
                </div>
                <div className={iconStyle}>
                    <FavoriteBorderOutlined />
                </div>
                <div className={iconStyle}>
                    <SearchOutlined />
                </div>
            </div>
        </div>
    );
};

export default Product;