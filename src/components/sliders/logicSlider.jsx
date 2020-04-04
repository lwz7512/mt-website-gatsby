import React from 'react'
import Slider from "react-slick"

const LogisticSlider = () => {

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
          <img className="solution-pro-base" src="/img/solution/Logistics_Tracking_System_01.jpg" />
          <p className="solution-pro-title">
          Logistics Tracking System
          </p>
        </div>
      </div>

      <div className="swiper-slide">
        <div className="solution-pro-box">
          <img className="solution-pro-base" src="/img/solution/Logistics_Tracking_System_02.jpg" />
          <p className="solution-pro-title">
          Real-Time Tracking for Inside/Ambient Temperature, Shock, and Location
          </p>
        </div>
      </div>

      <div className="swiper-slide">
        <div className="solution-pro-box">
          <img className="solution-pro-base" src="/img/solution/Logistics_Tracking_System_03.jpg" />
          <p className="solution-pro-title">
          Cloud Based Information Accessible to Different Authorized Users at Same Time
          </p>
        </div>
      </div>

      <div className="swiper-slide">
        <div className="solution-pro-box">
          <img className="solution-pro-base" src="/img/solution/Logistics_Tracking_System_04.jpg" />
          <p className="solution-pro-title">
          If Something Goes Wrong with Your Lobsters, We Help you to Find out WHY
          </p>
        </div>
      </div>

    </Slider>
  )
}

export default LogisticSlider