import React from 'react'
import Slider from "react-slick"

const SecuritySlider = () => {

  const settings = {
    autoplay: false,  
    dots: true,
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
          <img className="solution-pro-base" src="/img/solution/Security_Camera_System_01.jpg" />
          <p className="solution-pro-title">
          Security Camera System - Customized AI Assisted Watchman Feature, Extra Screen of False Alarm
          </p>
        </div>
      </div>

      <div className="swiper-slide">
        <div className="solution-pro-box">
          <img className="solution-pro-base" src="/img/solution/Security_Camera_System_02.jpg" />
          <p className="solution-pro-title">
          Local Storage and Cloud Backup Dual Protection for the Safety of Data
          </p>
        </div>
      </div>

      <div className="swiper-slide">
        <div className="solution-pro-box">
          <img className="solution-pro-base" src="/img/solution/Security_Camera_System_03.jpg" />
          <p className="solution-pro-title">
          Keep an Eye on Your Property From Virtually Anywhere
          </p>
        </div>
      </div>

    </Slider>
  )
}

export default SecuritySlider