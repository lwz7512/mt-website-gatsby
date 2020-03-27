/**
 * product page
 * 
 * @2020/03/24
 */
import React from 'react'
import Layout from "../components/layout"

export default function ProductPage() {

  return (
    <Layout activeMenu="product">
      <section id="product" className="section-product base-bg">
        <div className="section textCenter ">
            <div className="nav-box">
                <ul id="myTab" className="nav nav-tabs nav-justified" >
                    <li role="presentation" className="active">
                        <a href="#PROD_1" role="tab" data-toggle="pill">
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#mt-winfo-icon-chuanbotuli"></use>
                            </svg>
                            product01
                        </a>
                    </li>
                    <li role="presentation">
                        <a href="#PROD_2" role="tab" data-toggle="pill">
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#mt-icon-test"></use>
                            </svg>
                            product02
                        </a>
                    </li>
                    <li role="presentation">
                        <a href="#PROD_3" role="tab" data-toggle="pill">
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#mt-shengzhengfuguizhang"></use>
                            </svg>
                            product03
                        </a>
                    </li>
                    <li role="presentation">
                        <a href="#PROD_4" role="tab" data-toggle="pill">
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#mt-shengzhengfuguizhang"></use>
                            </svg>
                            product04
                        </a>
                    </li>
                </ul>
                <div id="myTabContent" className="tab-content">
                    <div id="PROD_1" className="tab-pane fade in active padlr50">
                        <p>Product 1</p>
                    </div>
                    <div id="PROD_2" className="tab-pane fade padlr50">
                        <p>Product 2</p>
                    </div>
                    <div id="PROD_3" className="tab-pane fade padlr50">
                      <p>Product 3</p>
                    </div>
                    <div id="PROD_4" className="tab-pane fade padlr50">
                      <p>Product 4</p>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </Layout>
  )

}