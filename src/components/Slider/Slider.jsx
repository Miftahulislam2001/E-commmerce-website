import { ArrowLeftOutlined, ArrowRightOutlined, } from '@mui/icons-material';
import React, { useState } from 'react';
import { ApiSlides } from '../../Api/sliderApi';
import './Slider.css'

const Slider = () => {
    const [slides] = useState(ApiSlides);
    const [activeSlides, setActiveSlides] = useState(0);
    const arrowStyle = 'rounded-full bg-gray-300 flex justify-center items-center shadow-sm m-3 p-2 hover:cursor-pointer';

    const nextSlide = () =>{
        if(activeSlides === slides.length - 1){
            setActiveSlides(0)
        }else{
            setActiveSlides(activeSlides + 1)
        }
    }
    const previousSlide = () =>{
        if(activeSlides === 0){
            setActiveSlides(slides.length - 1)
        }else{
            setActiveSlides(activeSlides - 1)
        }
    }


    return (
        <div className='parentsDiv h-[540px] flex justify-between items-center '>
            {/* Left Arrow */}
            <div className={arrowStyle}>
                <ArrowLeftOutlined onClick={previousSlide} />
            </div>
            {/* Slider */}
            {
                slides.map((slide, index) => { 
                    if (index === activeSlides) {
                        return (
                            
                            <div key={index} className={`wrapper w-[100%] h-[500px] relative overflow-hidden flex justify-center items-center rounded-lg shadow-2xl border-2 border-gray-50 ${slide.background}`}>

                                <div className="slide flex justify-center items-center w-[100%]">
                                    <div className="slideImg flex flex-1 justify-center items-center  w-[60%]">
                                        <img className='h-[100%]' src={slide.src} />
                                    </div>
                                    <div className='description flex flex-col place-items-start justify-center gap-3 mx-3 w-[40%]'>
                                        <h2 className='text-3xl'>{slide.content.h2}</h2>
                                        <p className='text-xl'>{slide.content.p}</p>
                                        <button className='btn'>Shop Now</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })
            }
            {/* Right Arrow */}
            <div className={arrowStyle}>
                <ArrowRightOutlined onClick={nextSlide} />
            </div>
        </div>
    );
};

export default Slider;