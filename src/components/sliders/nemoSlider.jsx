import React from 'react'
import Slider from "react-slick"

const NemoSlider = () => {

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
          <img className="solution-pro-base" src="/img/product/Nemo-1.jpg" />
          <p className="solution-pro-title">
            Nemo  AI Assisted Underwater Scanning ROV​
          </p>
        </div>
      </div>

      <div className="swiper-slide">
        <div className="solution-pro-box">
          <img className="solution-pro-base" src="/img/product/Nemo-2.jpg" />
          <p className="solution-pro-title">
          Nemo has eight fast and flexible thrusters, allowing for high-speed autonomous cruising.​
          </p>
        </div>
      </div>

      <div className="swiper-slide">
        <div className="solution-pro-box">
          <img className="solution-pro-base" src="/img/product/Nemo-3.jpg" />
          <p className="solution-pro-title">
          Suspended in strong currents, Nemo can scan 1,000 square meters in 10 minutes.​
          </p>
        </div>
      </div>

      <div className="swiper-slide">
        <div className="solution-pro-box">
          <img className="solution-pro-base" src="/img/product/Nemo-4.jpg" />
          <p className="solution-pro-title">
          The 1080p camera with 6000 lumen lights enables live streaming of deep-water images in colour. 180 degree vision allows for earlier topside control.
          </p>
        </div>
      </div>

      <div className="swiper-slide">
        <div className="solution-pro-box">
          <img className="solution-pro-base" src="/img/product/Nemo-5.jpg" />
          <p className="solution-pro-title">
          Videos captured via ROVs are processed in real-time by our AI recognition software, which allows for automatic identification and labeling (objects and marine life).​
          </p>
        </div>
      </div>

      <div className="swiper-slide">
        <div className="solution-pro-box">
          <img className="solution-pro-base" src="/img/product/Nemo-6.jpg" />
          <p className="solution-pro-title">
          Additional utility module for sensors, cameras, lights and computing kits are available.
          </p>
        </div>
      </div>

    </Slider>
  )
}

export default NemoSlider