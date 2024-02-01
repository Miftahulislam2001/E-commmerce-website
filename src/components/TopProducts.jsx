import React from 'react';
import { ApiTopProduct } from '../Api/TopProducts.js'
import Product from './Product.jsx';


const TopProducts = () => {
    return (
        <div className='p-5 flex flex-wrap'>
            {
                ApiTopProduct.map((product, index) => <Product key={index} product={product} />)
            }
        </div>
    );
};

export default TopProducts;