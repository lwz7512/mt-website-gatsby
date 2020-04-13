/**
 * about page
 * 
 * @2020/03/24
 */
import React from "react"
import Layout from "../components/layout"

const AboutPage = () => (
  <Layout activeMenu="about">
    <section id="about" className="section-about">
        <div className="about-right-box">
            <div className="right-about-st"><div className="title-line"></div>ABOUT US</div>
            <div className="right-about-title">
                <div className="right-about-logo"></div>
                <div className="right-about-text">
                    <div >
                        <div>
                            <img className="right-logo" src="img/logo-noInfo.svg" alt="" />
                        </div>
                        <div>
                            <p>Marine Thinking Inc.</p>
                            <p>is a Canadian company founded in 2018. We are focused on redefining the marine industry through the use of our highly advanced artificial intelligence (AI) and robotic technologies. </p>
                        </div>
                    </div>
                    <div className="right-desc">
                        <p>From data collected by our specialized remotely operated vehicles (ROV), equipped with rich sensor fusion, we have logged nearly 1,000 hours of accurately labeled marine species, objects, and environmental physical data. At the same time, Marine Thinking scientists and engineers continue to research and develop advanced deep neural network AI models, specifically, for marine scenes. This will allow our AI-assisted ROV to conduct their sea exploration with complete automatic cursing, efficient identification, and autonomous operation decision-making.</p>
                        
                        <p>Our ROVs and AI solutions will enable automated monitoring of marine environments and support scientific research. Additionally, our technology can enable automation of ocean ranching, search and retrieve sunken channel objects. Marine Thinking’s ROVs allow autonomous unmanned operation on high-danger sites, and automated fishing.</p>

                        <p>With the continuous accumulation of big data, Marine Thinking will be able to provide more accurate data on the marine environment and species distribution within. This provides a platform for refined decision-making and support marine management. Our technology at Marine Thinking aims to protect the environment and strengthen the sustainable development of the marine industry.</p>
                    </div>
                    <img src="/img/index-about-img.png" className="right-about-img" alt="" />

                </div>
            </div>
        </div>
    </section>

  </Layout>
)

export default AboutPage