/**
 * product page
 * 
 * @2020/03/24
 */
import React from 'react'
import Layout from "../components/layout"
import GradSlider from "../components/sliders/gradSlider"
import InvetSlider from "../components/sliders/invetSlider"
import EnviroSlider from "../components/sliders/envirSlider"
import SecuriSlider from "../components/sliders/secuSlider"
import PackingSlider from "../components/sliders/packSlider"
import LogisticSlider from "../components/sliders/logicSlider"
import NemoSlider from "../components/sliders/nemoSlider"
import FindingSlider from "../components/sliders/findinSlider"


export default function ProductPage() {

    const hash = window.location.hash || '#SEAFDCORP' // default

    return (
        <Layout activeMenu="product">
        <section id="solution" className="section-product base-bg">
            <div className="section textCenter ">
                <div className="nav-box navbar-tranp">
                    <ul id="myTab" className="nav nav-tabs nav-justified" >
                        <li role="presentation" 
                            className={hash==='#SEAFDCORP'?'active':''}>
                            <a href="#SEAFDCORP" role="tab" data-toggle="pill">
                                <svg className="icon" aria-hidden="true">
                                    <use xlinkHref="#mt-icon-test"></use>
                                </svg>
                                Seafood Company
                            </a>
                        </li>
                        <li role="presentation" 
                            className={hash==='#FISHERMEN'?'active':''}>
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
        </section>
        </Layout>
    )

}