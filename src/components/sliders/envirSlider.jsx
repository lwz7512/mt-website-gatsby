import React from 'react'
import Slider from "react-slick"

const EnviroSlider = () => {

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
          <img className="solution-pro-base" src="/img/solution/Environment_Monitoring_System_01.jpg" />
          <p className="solution-pro-title">
            Environmental Monitoring System
          </p>
        </div>
      </div>

      <div className="swiper-slide">
        <div className="solution-pro-box">
          <img className="solution-pro-base" src="/img/solution/Environment_Monitoring_System_02.jpg" />
          <p className="solution-pro-title">
          Minimizing the Risk of Mortality by Optimizing the Critical Environmental Factors of Water Tanks
          </p>
        </div>
      </div>

      <div className="swiper-slide">
        <div className="solution-pro-box">
          <img className="solution-pro-base" src="/img/solution/Environment_Monitoring_System_03.jpg" />
          <p className="solution-pro-title">
          Instant AI Assisted Adjustment Guideline to Achieve the Optimal Environmental Balance
          </p>
        </div>
      </div>

      <div className="swiper-slide">
        <div className="solution-pro-box">
          <img className="solution-pro-base" src="/img/solution/Environmental_Monitoring_System-4_fix.jpg" />
          <p className="solution-pro-title">
          Advance AI Assisted Adjustment Strategy Based on Inventory Changes
          </p>
        </div>
      </div>

      <div className="swiper-slide">
        <div className="solution-pro-box">
          <img className="solution-pro-base" src="/img/solution/Environment_Monitoring_System_05.jpg" />
          <p className="solution-pro-title">
          AI Screened Alarm Notification for Both on Site and Mobile Devices
          </p>
        </div>
      </div>

      <div className="swiper-slide">
        <div className="solution-pro-box">
          <img className="solution-pro-base" src="/img/solution/Environment_Monitoring_System_06.jpg" />
          <p className="solution-pro-title">
          Sensors Customized to You Needs: Temperature, Oxygen, Light, pH, Ammonia, Ultrasonic Water Flow, Salinity, and More
          </p>
        </div>
      </div>

    </Slider>
  )
}

export default EnviroSlider