import { ArrowLeftOutlined, ArrowRightOutlined,  } from '@mui/icons-material';
import React from 'react';

const Slider = () => {
    const arrowStyle = 'rounded-full bg-gray-300 flex justify-center items-center shadow-sm m-3 p-2 hover:cursor-pointer';


    return (
        <div className='parentsDiv h-[540px] flex justify-between items-center '>
            {/* Left Arrow */}
            <div className={arrowStyle}>
                <ArrowLeftOutlined/>
            </div>
            {/* Slider */}
            <div className='wrapper w-[100%] h-[500px] relative overflow-hidden flex justify-center items-center rounded-lg shadow-2xl border-2 border-gray-50 bg-purple-200'>

                <div className="slide flex justify-center items-center w-[100%]">
                    <div className="slideImg flex flex-1 justify-center items-center  w-[60%]">
                        <img className='h-[100%]' src="https://soliloquywp.com/wp-content/uploads/2016/08/11-Website-Slider-Best-Practices-That-You-Must-Follow.png" />
                    </div>
                    <div className='description flex flex-col place-items-start justify-center gap-3 mx-3 w-[40%]'>
                        <h2 className='text-3xl'>This is an awsome slider </h2>
                        <p className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum soluta eius laudantium ea rem impedit tempora culpa adipisci dignissimos consequuntur.</p>
                        <button className='btn'>Shop Now</button>
                    </div>
                </div>
            </div>
            {/* Right Arrow */}
            <div className={arrowStyle}>
                <ArrowRightOutlined/>
            </div>
        </div>
    );
};

export default Slider;