/**
 * product page
 * 
 * @2020/03/24
 */
import React, { useState, useEffect } from 'react'
import Layout from "../components/layout"
import GradSlider from "../components/sliders/gradSlider"
import InvetSlider from "../components/sliders/invetSlider"
import EnviroSlider from "../components/sliders/envirSlider"
import SecuriSlider from "../components/sliders/secuSlider"
import PackingSlider from "../components/sliders/packSlider"
import LogisticSlider from "../components/sliders/logicSlider"
import NemoSlider from "../components/sliders/nemoSlider"
import FindingSlider from "../components/sliders/findinSlider"
import { scrollTo as animateTo } from "../utils/ui-helper"


export default function ProductPage() {

    const [hash, setHash] = useState('#SEAFDCORP');
    const [point, setPoint] = useState(0);

    const HideBullet   = 'swiper-pagination-bullet'
    const ActiveBullet = 'swiper-pagination-bullet swiper-pagination-bullet-active'

    useEffect(() => {
        const nwhs = window.location.hash || '#SEAFDCORP' // default
        setHash(nwhs)
    }, [])

    useEffect(() => {
        // waiting rendering completed to scroll
        setTimeout(()=>{
            scrollTo(0)
            const swPagination = document.querySelector('.swiper-pagination')
            if(swPagination) swPagination.style.bottom = 0 // popup side menu
        }, 500)
    }, [hash])

    useEffect(() => {
        window.addEventListener('scroll', handleScrollToElement)
        return () => {
            window.removeEventListener('scroll', handleScrollToElement)
        }
    })
    
    const handleScrollToElement = event => {
        let windowHt = window.innerHeight
        let scrollTop = document.documentElement.scrollTop
        let totalHeight = document.body.scrollHeight
        // console.log(windowHt, scrollTop, totalHeight)
        let percent = scrollTop / (totalHeight - windowHt)
        // console.log(percent)
        setPoint(percent)
    }

    const scrollTo = index => {
        let totalHeight = document.body.scrollHeight
        let windowHt = window.innerHeight
        let toTop = index * (totalHeight)
        // document.documentElement.scrollTop = toTop
        animateTo(document.documentElement, toTop, 100)
    }

    const hashChangeHandler = hs => {
        setHash(hs)
        // need to collaborate with style :target::before
        // to keep the page position
        window.location.hash = hs
    }

    return (
      <Layout activeMenu="product">
        <section id="solution" 
          className="section-product base-bg timeline ">
            <div className="section textCenter ">
                <div className="nav-box navbar-tranp">
                    <ul id="myTab" className="nav nav-tabs nav-justified" >
                        <li role="presentation" 
                            className={hash==='#SEAFDCORP'?'active':''}
                            onClick={()=>hashChangeHandler('#SEAFDCORP')}>
                            <a href="#SEAFDCORP" role="tab" data-toggle="pill">
                                <svg className="icon" aria-hidden="true">
                                    <use xlinkHref="#mt-icon-test"></use>
                                </svg>
                                Seafood Companies
                            </a>
                        </li>
                        <li role="presentation" 
                            className={hash==='#FISHERMEN'?'active':''}
                            onClick={()=>hashChangeHandler('#FISHERMEN')}>
                            <a href="#FISHERMEN" role="tab" data-toggle="pill">
                                <svg className="icon" aria-hidden="true">
                                    <use xlinkHref="#mt-winfo-icon-chuanbotuli"></use>
                                </svg>
                                Fishermen
                            </a>
                        </li>
                    </ul>
                </div>
                <div id="myTabContent" className="tab-content">

                    <div id="SEAFDCORP" 
                        className={hash==='#SEAFDCORP'?'tab-pane fade in active':'tab-pane fade'}>
                        <div className="swiperSecond" style={{marginTop: 80}}>
                            <div className="row">
                                <div className="col-md-1 "></div>
                                <div className="col-md-10 ">
                                    <GradSlider />
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                        </div>
                        <div className="swiperThird">
                            <div className="row">
                                <div className="col-md-1 "></div>
                                <div className="col-md-10 ">
                                    <InvetSlider />
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                        </div>
                        <div className="swiperSecond">
                            <div className="row">
                                <div className="col-md-1 "></div>
                                <div className="col-md-10 ">
                                    <EnviroSlider />
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                        </div>
                        <div className="swiperThird">
                            <div className="row">
                                <div className="col-md-1 "></div>
                                <div className="col-md-10 ">
                                    <SecuriSlider />
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                        </div>
                        <div className="swiperSecond">
                            <div className="row">
                                <div className="col-md-1 "></div>
                                <div className="col-md-10 ">
                                    <PackingSlider />
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                        </div>
                        <div className="swiperThird">
                            <div className="row">
                                <div className="col-md-1 "></div>
                                <div className="col-md-10 ">
                                    <LogisticSlider />
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                        </div>
                    </div>

                    <div id="FISHERMEN" 
                        className={hash==='#FISHERMEN'?'tab-pane fade in active':'tab-pane fade'}>
                        <div className="swiperSecond" style={{marginTop: 80}}>
                            <div className="row">
                                <div className="col-md-1 "></div>
                                <div className="col-md-10 ">
                                    <NemoSlider />
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                        </div>
                        <div className="swiperThird">
                            <div className="row">
                                <div className="col-md-1 "></div>
                                <div className="col-md-10 ">
                                    <FindingSlider />
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* vertical slide navigation menu */}
            { hash === '#SEAFDCORP' &&
                <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
                    <span 
                        className={(0 <= point && point < 1/6) ? ActiveBullet : HideBullet}
                        onClick={()=>scrollTo(0)}>
                        Customized Grading System
                    </span>
                    <span className={(1/6 <= point && point < 2/6) ? ActiveBullet : HideBullet}
                        onClick={()=>scrollTo(1/6)}>
                        Inventory Management System
                    </span>
                    <span className={(2/6 <= point && point < 3/6) ? ActiveBullet : HideBullet}
                        onClick={()=>scrollTo(2/6)}>
                        Environment Monitoring System
                    </span>
                    <span className={(3/6 <= point && point < 4/6) ? ActiveBullet : HideBullet}
                        onClick={()=>scrollTo(3/6)}>
                        Security Camera System
                    </span>
                    <span className={(4/6 <= point && point < 5/6) ? ActiveBullet : HideBullet}
                        onClick={()=>scrollTo(4/6)}>
                        Packing System
                    </span>
                    <span className={(5/6 <= point && point <= 6/6) ? ActiveBullet : HideBullet}
                        onClick={()=>scrollTo(5/6)}>
                        Logistics Tracking System
                    </span>
                </div>
            }
            { hash === '#FISHERMEN' &&
                <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
                    <span 
                        className={(0 <= point && point < 2/3) ? ActiveBullet : HideBullet}
                        onClick={()=>scrollTo(0)}>
                        Nemo
                    </span>
                    <span className={(2/3 <= point && point < 1.5) ? ActiveBullet : HideBullet}
                        onClick={()=>scrollTo(2/3)}>
                        Finding
                    </span>
                </div>
            }
        </section>
        </Layout>
    )

}