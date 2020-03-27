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
            <div className="right-about-st"><div className="title-line"></div>ABOUT</div>
            <div className="right-about-title">
                <div className="right-about-logo"></div>
                <div className="right-about-text">
                    <div >
                        <div>
                            <img className="right-logo" src="img/logo-noInfo.svg" alt="" />
                        </div>
                        <div>
                            <p>Marine Thinking Inc.</p>
                            <p>is an Artificial Intelligence company that provides innovating solutions for the seafood industry since 2018.</p>
                        </div>
                    </div>
                    <div className="right-desc">
                        <p>Our services include Smart seafood processing eco-system and revolutionary fish harvesting solutions.</p>
                        <p>At Marine Thinking, We believe that cutting-edge technologies can help the seafood industry thrive efficiently and develop sustainably.</p>
                    </div>
                    <img src="img/index-about-img.png" className="right-about-img" alt="" />

                </div>
            </div>
        </div>
    </section>

  </Layout>
)

export default AboutPage