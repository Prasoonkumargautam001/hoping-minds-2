import  BannerImg from  "../../assets/main.jpeg";
import React from 'react';
import "./Banner.css"

const Banner = () => {
  return (
    <div className='banner-section' id="home">
            <img src={BannerImg} className="banner">
        </img>
        <div className="banner-wrapper">
        <div className="banner-content">
            <h1>Continue Exploring</h1>
            <p>orem ipsum dolor sit amet consectetur adipisicing elit. Vitae explicabo debitis est autem dicta.</p>
            <button className='banner-btn'>Explore Tours</button>
        </div>
        </div>
      
    </div>
  )
}

export default Banner
