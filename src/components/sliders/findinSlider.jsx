import React from 'react'
import Slider from "react-slick"

const FindingSlider = () => {

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
          <img className="solution-pro-base" src="/img/product/Finding-1.jpg" />
          <p className="solution-pro-title">
          Finding-AI Assisted Underwater Retrieving ROV​
          </p>
        </div>
      </div>

      <div className="swiper-slide">
        <div className="solution-pro-box">
          <img className="solution-pro-base" src="/img/product/Finding-2.jpg" />
          <p className="solution-pro-title">
          Finding's four thrusters work in perfect synchronization, enabling a smooth ride every time by this 23kg ROV.​
          </p>
        </div>
      </div>

      <div className="swiper-slide">
        <div className="solution-pro-box">
          <img className="solution-pro-base" src="/img/product/Finding-3.jpg" />
          <p className="solution-pro-title">
          HD camera live stream for topside control​
          </p>
        </div>
      </div>

      <div className="swiper-slide">
        <div className="solution-pro-box">
          <img className="solution-pro-base" src="/img/product/Finding-4.jpg" />
          <p className="solution-pro-title">
          Finding can be fitted with a mechanical arm to retrieve its underwater target.
          </p>
        </div>
      </div>

      <div className="swiper-slide">
        <div className="solution-pro-box">
          <img className="solution-pro-base" src="/img/product/Finding-5.jpg" />
          <p className="solution-pro-title">
          Additional utility modules for sensors, cameras, shipboard power supply, and computing kits are available.
          </p>
        </div>
      </div>

    </Slider>
  )
}

export default FindingSlider