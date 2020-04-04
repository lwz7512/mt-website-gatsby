import React from 'react'
import Slider from "react-slick"

const PackingSlider = () => {

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
          <img className="solution-pro-base" src="/img/solution/Packing_System_01.jpg" />
          <p className="solution-pro-title">
          Packing System
          </p>
        </div>
      </div>

      <div className="swiper-slide">
        <div className="solution-pro-box">
          <img className="solution-pro-base" src="/img/solution/Packing_System_02.jpg" />
          <p className="solution-pro-title">
          Task Guideline for Packing Team, Also Accessible Remotely for Management Team
          </p>
        </div>
      </div>

      <div className="swiper-slide">
        <div className="solution-pro-box">
          <img className="solution-pro-base" src="/img/solution/Packing_System_03.jpg" />
          <p className="solution-pro-title">
          Customized Hardware Infrastructure to Fit your Holding Facility
          </p>
        </div>
      </div>

      <div className="swiper-slide">
        <div className="solution-pro-box">
          <img className="solution-pro-base" src="/img/solution/Packing_System_04.jpg" />
          <p className="solution-pro-title">
          Based on Smart Scale Reader, Compatible to all Popular Scales on Market
          </p>
        </div>
      </div>

      <div className="swiper-slide">
        <div className="solution-pro-box">
          <img className="solution-pro-base" src="/img/solution/Packing_System_05.jpg" />
          <p className="solution-pro-title">
          Connected to Other Links of Atlanet Ecosystem
          </p>
        </div>
      </div>

      <div className="swiper-slide">
        <div className="solution-pro-box">
          <img className="solution-pro-base" src="/img/solution/Packing_System_06.jpg" />
          <p className="solution-pro-title">
          Know the Working Performance of Your Team to Help Your Management
          </p>
        </div>
      </div>

    </Slider>
  )
}

export default PackingSlider