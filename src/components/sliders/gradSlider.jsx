import React from 'react'
import Slider from "react-slick"

const GradSlider = () => {

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
          <img className="solution-pro-base" src="./img/solution/Customized_Grading_System_01_md.jpg" />
          <p className="solution-pro-title">
            Customized Grading System
          </p>
        </div>
      </div>

      <div className="swiper-slide">
        <div className="solution-pro-box">
          <img className="solution-pro-base" src="./img/solution/Customized_Grading_System_02_md.jpg" />
          <p className="solution-pro-title">
            More Efficient in Grading Less Dependent on Labour Market
          </p>
        </div>
      </div>

      <div className="swiper-slide">
        <div className="solution-pro-box">
          <img className="solution-pro-base" src="./img/solution/Customized_Grading_System_03_md.jpg" />
          <p className="solution-pro-title">
            Prevent Mortality Risk during Shipping, Track the Supplier’s Quality
          </p>
        </div>
      </div>

      <div className="swiper-slide">
        <div className="solution-pro-box">
          <img className="solution-pro-base" src="./img/solution/Customized_Grading_System_04_md.jpg" />
          <p className="solution-pro-title">
            A Real-Time Guideline for Your Grading and Management Team
          </p>
        </div>
      </div>

      <div className="swiper-slide">
        <div className="solution-pro-box">
          <img className="solution-pro-base" src="./img/solution/Customized_Grading_System_05_md.jpg" />
          <p className="solution-pro-title">
            Enhance Your Knowledge to Improve Your Business
          </p>
        </div>
      </div>

    </Slider>
  )
}

export default GradSlider