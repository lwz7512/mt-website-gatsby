import React from 'react'
import Slider from "react-slick"

const FindingSlider = () => {

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
          <img className="solution-pro-base" src="./img/product/Finding-1_md.jpg" />
          <p className="solution-pro-title">
          Finding   AI Assisted Underwater Operating ROV​
          </p>
        </div>
      </div>

      <div className="swiper-slide">
        <div className="solution-pro-box">
          <img className="solution-pro-base" src="./img/product/Finding-2_md.jpg" />
          <p className="solution-pro-title">
          Finding's four thrusters work in perfect synchronization, enabling a smooth ride every time by this 23kg ROV.​
          </p>
        </div>
      </div>

      <div className="swiper-slide">
        <div className="solution-pro-box">
          <img className="solution-pro-base" src="./img/product/Finding-3_md.jpg" />
          <p className="solution-pro-title">
          HD camera live stream for topside control​
          </p>
        </div>
      </div>

      <div className="swiper-slide">
        <div className="solution-pro-box">
          <img className="solution-pro-base" src="./img/product/Finding-4_md.jpg" />
          <p className="solution-pro-title">
          Finding can be fitted with a mechanical arm to catch its underwater target.​
          </p>
        </div>
      </div>

      <div className="swiper-slide">
        <div className="solution-pro-box">
          <img className="solution-pro-base" src="./img/product/Finding-5_md.jpg" />
          <p className="solution-pro-title">
          Additional utility module for sensors, cameras, shipboard power supply, and computing kits are available.
          </p>
        </div>
      </div>

    </Slider>
  )
}

export default FindingSlider