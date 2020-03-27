import React from 'react'
import Slider from "react-slick"

const IndexSlider = () => {

  const settings = {
    autoplay: true,  
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
      <div className="textCenter index-bannerBg-01">
        <div className="swiper-slide">
          <div className="swiper-box">
            <div className="text center">
                <p >AI assisted Operational ROV</p>
                <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
            <img src="./img/pro-new-01.png" className="swiperImg" />
          </div>
        </div>
      </div>

      <div className="textCenter index-bannerBg-01">
        <div className="swiper-slide">
          <div className="swiper-box">
            <div className="text center">
                <p >AI assisted Operational ROV</p>
                <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
            <img src="./img/pro-new-02.png" className="swiperImg" />
          </div>
        </div>
      </div>

    </Slider>
  )
}

export default IndexSlider