import React from 'react';

const Category = ({category}) => {
    const {src, title} = category;


    return (
        <div className='flex-1 m-2 shadow-md rounded relative overflow-hidden'>
            <img src={src} alt="" />
            <div className='flex absolute w-[100%] h-[100%] top-0 left-0 items-center justify-center flex-col'>
                <h2 className='text-white font-medium text-2xl'>{title}</h2>
                <button className='btn'>See More</button>
            </div>
        </div>
    );
};

export default Category;