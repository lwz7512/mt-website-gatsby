/**
 * contact page
 * 
 * @2020/03/24
 */
import React from 'react'
import Layout from "../components/layout"

export default function ContactPage() {

  return (
    <Layout activeMenu="contact">
      <section id="about" className="section-about base-bg">
          <div className="about-right-box base-bg">
              <div className="minHeight">
                  <div className="contact-item-box">
                      <div className="right-about-st"><div className="title-line"></div>CONTACT US</div>
                      <div className="right-about-title">
                          <div className="right-about-text">
                              <div>
                                  <p>Marine Thinking Inc.</p>
                              </div>
                          </div>
                          <div className="contact-box">
                              <div className="contact-item">
                                  <div className="contact-item-new">
                                      <img src="/img/contact-icon-04.png" className="contact-icon" />
                                      <div className="contact-item-line">
                                          <p className="contact-title">NB Office:</p>
                                          <p>300-1 Germain Street, Brunswick Square Business Tower, Saint John, NB E2L 4VL</p>
                                          <p className="contact-title">NS Office:</p>
                                          <p>Unit 108, 1505 Barrington Street, Halifax, Nova Scotia, Canada B3J 3K5</p>
                                      </div>
                                  </div>
                              </div>
                              <div className="contact-item">
                                  <div >
                                      <img src="/img/contact-icon-03.png" className="contact-icon" />
                                      <div className="contact-item-line">
                                          <p className="contact-title">Telephone:</p>
                                          <p>+1 902 422-6888</p>
                                      </div>
                                  </div>
                              </div>
                              <div className="contact-item">
                                  <div >
                                      <img src="/img/contact-icon-02.png" className="contact-icon" />
                                      <div className="contact-item-line">
                                          <p className="contact-title">Fax:</p>
                                          <p>+1 902 425-2688</p>
                                      </div>
                                  </div>
                              </div>
                              <div className="contact-item">
                                  <div >
                                      <img src="/img/contact-icon-01.png" className="contact-icon" />
                                      <div className="contact-item-line">
                                          <p className="contact-title">E-mail:</p>
                                          <p>info@marinethinking.com</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </Layout>
  )

}