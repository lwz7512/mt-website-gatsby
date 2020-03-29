import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import IndexSlider from "../components/sliders/indexSlider"

const IndexPage = () => (
    <Layout activeMenu="/">
          <SEO title="Home" />
          <div className="mt-container">
              <div id="section-banner">
                  <div id="index-banner" className="index-banner">
                      <IndexSlider />
                  </div>
              </div>
          
              <div className="pad-50">
                  <div className="solution-section">
                      <div className="row solution-card">
                          <div className="col-md-6 col-sm-12 solution-card">
                              <Link to="/solution/im">
                                <div className="col-left-box pro-bg">
                                    <div className="col-left-info">
                                        <p className="col-left-title">Retrieve Ghost Gear</p>
                                        <p className="col-left-more">Learn More ></p>
                                    </div>
                                </div>
                              </Link>
                          </div>
                          <div className="col-md-6 col-sm-12 marBottom20">
                              <div className="row">
                                  <div className="col-md-12 right-column-top">
                                      <Link to="/solution/sc">
                                        <div className="col-left-box">
                                            <div className="col-left-info" >
                                                <p className="col-left-title">Sea cucumbers</p>
                                                <p className="col-left-more">Learn More ></p>
                                            </div>
                                            <img src="./img/pro_03.png" className="solution-pro-right" />
                                        </div>
                                      </Link>
                                  </div>
                                  <div className="col-md-12 marBottom20 right-column-bottom" >
                                      <Link to="/solution/sl">
                                        <div className="col-left-box">
                                            <div className="col-left-info" >
                                                <p className="col-left-title">Lobster Holding Facility</p>
                                                <p className="col-left-more">Learn More ></p>
                                            </div>
                                            <img src="./img/pro_04.png" className="solution-pro-right" />
                                        </div>
                                      </Link>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          
              <div className="pad-50-bottom forSomeBody">
                  
                  <div className="row">
                      <div className="col-md-6 col-sm-12 forSomeBox">
                        <Link to="/product#SEAFDCORP">
                          <div className="col-fs-box">
                              <div className="col-for-info" >
                                  <p className="col-left-title">For <br />Seafood<br />Company</p>
                                  <p className="col-left-more">Learn More ></p>
                              </div>
                              <img src="./img/for_01.png" className="for-img" />
                          </div>
                        </Link>
                      </div>
                      <div className="col-md-6 col-sm-12 forSomeBox">
                        <Link to="/product#FISHERMEN">
                          <div className="col-fs-box">
                              <div className="col-for-info" >
                                  <p className="col-left-title">For <br />Fishermen</p>
                                  <p className="col-left-more">Learn More ></p>
                              </div>
                              <img src="./img/for_02.jpg" className="for-img" />
                          </div>
                        </Link>
                      </div>
                  </div>
              </div>
          </div>
    </Layout>
)

export default IndexPage