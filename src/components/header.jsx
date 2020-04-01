import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle, activeMenu }) => (
  <header>
    <div className="navbar navbar-default navbar-tranp" role="navigation" style={{zIndex: 99}}>
        <div className="container">
              <div className="navbar-header">
                  <button className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                      <span className="icon icon-bar"></span>
                      <span className="icon icon-bar"></span>
                      <span className="icon icon-bar"></span>
                  </button>
                  <Link to="/">
                    <img className="logo" src="/img/logo-base-hoz-noINC.svg" alt="" />
                  </Link>
              </div>
              <div className="collapse navbar-collapse">
                  <ul className="nav navbar-nav navbar-right">
                      <li id="product">
                        <Link to="/product" className={activeMenu=='product'?'active':''}>
                          PRODUCT
                        </Link>
                      </li>
                      <li id="solu" className="dropdown">
                          <a href="#" 
                            className={activeMenu=='solution'?'active dropdown-toggle':'dropdown-toggle'}
                            data-toggle="dropdown" role="button" 
                            aria-haspopup="true" aria-expanded="false">
                              SOLUTION<span className="caret"></span>
                            </a>
                          <ul className="dropdown-menu">
                              <li>
                                <Link to="/solution/im">
                                  Identifying and Mapping Ghost Gear
                                </Link>
                                </li>
                              <li>
                                <Link to="/solution/sc">
                                  Sea Cucumber Fishing Strategy
                                </Link>
                              </li>
                              <li>
                                <Link to="/solution/sl">
                                  Smart Lobster Processing Plant
                                </Link>
                              </li>
                          </ul>
                      </li>
                      <li id="contact-li">
                        <Link to="/contact" className={activeMenu=='contact'?'active':''}>
                          CONTACT
                        </Link>
                      </li>
                      <li id="recruit">
                        <Link to="/recruit" className={activeMenu=='recruit'?'active':''}>
                          CAREER
                        </Link>
                      </li>
                      <li id="news">
                        {/* <Link to="/news" className={activeMenu=='news'?'active':''}>
                          NEWS
                        </Link> */}
                      </li>
                      <li id="about">
                        <Link to="/about" className={activeMenu=='about'?'active':''}>
                          ABOUT
                        </Link>
                      </li>
                  </ul>
              </div>
          </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
