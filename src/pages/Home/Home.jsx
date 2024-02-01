import React from 'react';
import Announcement from '../../components/Announcement';
import Navbar from '../../components/Navbar';
import Slider from '../../components/Slider/Slider';
import Categories from '../../components/Categories';
import TopProducts from '../../components/TopProducts';
import NewsLetter from '../../components/NewsLetter';
import Footer from '../../components/Footer';



const Home = () => {
    return (
        <div>
            <Announcement/>
            <Navbar/>
            <Slider/>
            <Categories/>
            <TopProducts/>
            <NewsLetter/>
            <Footer/>
           
        </div>
    );
};

export default Home;