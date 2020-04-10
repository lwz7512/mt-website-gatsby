import React from 'react'
import Slider from "react-slick"

const InvetSlider = () => {

  const settings = {
    autoplay: false,  
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };
  
  return (
    <Slider {...settings}>

      <div className="swiper-slide">
        <div className="solution-pro-box">
          <img className="solution-pro-base" src="/img/solution/Inventory_Management_System_01.jpg" />
          <p className="solution-pro-title">
            Inventory Management System
          </p>
        </div>
      </div>

      <div className="swiper-slide">
        <div className="solution-pro-box">
          <img className="solution-pro-base" src="/img/solution/Inventory_Management_System_02.jpg" />
          <p className="solution-pro-title">
            Digitize the Data Without Replacing the Current Scales
          </p>
        </div>
      </div>

      <div className="swiper-slide">
        <div className="solution-pro-box">
          <img className="solution-pro-base" src="/img/solution/Inventory_Management_System_03.jpg" />
          <p className="solution-pro-title">
            Suitable to Different Quantities of Holding Tanks and Working Procedures
          </p>
        </div>
      </div>

      <div className="swiper-slide">
        <div className="solution-pro-box">
          <img className="solution-pro-base" src="/img/solution/Inventory_Management_System-4_fix.jpg" />
          <p className="solution-pro-title">
            Connected to Other Links of Atlanet for Lobster Plant Ecosystem
          </p>
        </div>
      </div>

    </Slider>
  )
}

export default InvetSlider