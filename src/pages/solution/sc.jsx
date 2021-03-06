/**
 * Sea Cucumber Fishing Strategy
 */
import React from "react"
import Layout from "../../components/layout"


export default function SCPage() {

  return (
    <Layout activeMenu="solution">
      <div className="solutions-container">
          <div className="solutions-box">
              <div className="solutions-big-title">
                <span className="fisrt-text">S</span>ea Cucumber Fishing Strategy
              </div>

              <div className="col-md-6 col-sm-12 solutions-text">
                  <p>The Orange-Footed Sea Cucumber (Cucumaria frondosa), also known as the Northern Sea Cucumber, is a species of Echinoderm distributed across the Northern Atlantic and Arctic oceans. In Canada, it is commonly harvested in the Bay of Fundy region of New Brunswick and the regions of Newfoundland.</p>
                  <p>Harvesting of these species in Canada began in the late 1980s, originally using a scallop drag attached to a vessel. Little modifications have been made since, and those that have were designed to reduce by-catch. Unfortunately, that same basic design and deployment continues to have a significant impact to seabed ecology. The current method involves mobile drags, which are sea-urchin dredges modified for sea cucumber, and fishing areas are selected heavily based on past fishing expeditions and intuition. Sonar is used to detect the seafloor, however, provides no information on the precise location of the sea cucumber.</p>
              </div>
              <div className="col-md-6 col-sm-12 solutions-img">
                  <iframe className="cloud-video-frame" title="cucumber"
                    src="https://watch.cloudflarestream.com/06c37605de7f98171fb4515d77e0af34"></iframe>
              </div>

              <div className="col-md-12 col-sm-12 solutions-text">
                  <p>Environmentally, these methods are disruptive, and even with the slight modifications, still yield other marine benthic species (ex. sea urchin, mussels, lobster, crab, etc.) and often very few actual sea cucumbers. Even though fisheries return all species other than sea cucumber, with no evaluations, the survival of by-catch or the recovery-time of species remains unknown. The drags flatten the seabed and multiple passes create a smooth surface where it is made near-impossible for future harvesters to catch sea cucumbers that are attached in crevices or boulders that have fallen below the surface from previous drags. Economically, fuel and time are wasted, and as fishing is a high-risk occupation, crews are needlessly jeopardized for very poor yields. Furthermore, the average catch rate of the current year will influence the quota for total allowable catch (TAC) the following year. To manage TAC, fisheries may restrict zoning, or limit permits in response to yields, however with insufficient information on sea cucumber stock, decisions are largely based on passive information and out of date assessments.</p>
              </div>

              <div className="col-md-6 col-sm-12 solutions-text solutions-img">
                  <img src="/img/solution/Sea-Cucumber-Fishing-Strategy-1_md.jpg" />
              </div>
              <div className="col-md-6 col-sm-12 solutions-text solutions-text">
                  <p>We, at Marine Thinking, have identified the growing sea cucumber industry as an area of concern that can be mitigated, with the help of our semi-automated fishing method, using remotely operated vehicles (ROV). Based on sea cucumber harvesting and exploitation around the world, we believe that there is a social responsibility to employ an effective management solution proactively. Our ROV has the ability to assist in the reconciliation of sustainable harvest and the socio-economic importance of the sea cucumber fisheries.</p>
              </div>

              <div className="rows">
                  <div className="col-md-6 col-sm-12 solutions-text solutions-img">
                      <img src="/img/solution/Sea-Cucumber-Fishing-Strategy-2_md.jpg" />
                  </div>
                  <div className="col-md-6 col-sm-12 solutions-text solutions-img">
                      <img src="/img/solution/Sea-Cucumber-Fishing-Strategy-3_md.jpg" />
                  </div>    
              </div>
              
              <div className="col-md-12 col-sm-12 solutions-text">
                  <p>Our high-speed ROV is used for underwater discovery that will scan the ocean floor automatically which means the operator only needs to release the ROV into water. Its revolutionary artificial intelligence (AI) makes the ROV incredibly self-sufficient and able to record and process sea cucumber distribution in real-time with relatively little human support.  With its unique ability to scan underwater, a density and distribution model of the sea cucumbers will be generated during operation via AI. This will give fisherman an informed solution by providing them with seafloor vision and a target map prior to their expeditions. This technical guidance with the semi-automated operational ROV will allow for more sustainable and efficient harvest by allowing them to focus on the optimal fishing areas, increase catch rate, reduce damage to seabed floors, and minimize wasted resources. </p>
              </div>

              <div className="col-md-12 col-sm-12 solutions-text text-bottom-line">
                  <p>Our AI offers a minimally invasive solution to gain valuable insight into underwater behaviours of sea cucumbers and other species, as well as prevent unnecessary habitat destruction and unsustainable exploitation. The risk of habitat impact with current fishing strategies can be reduced through our ROV investigation and unveil sensitive habitat areas that may need protection, safeguarding the livelihood of the sea cucumber fisheries and marine ecosystems.</p>
              </div>

              <div className="clear"></div>
          </div>
      </div>
    </Layout>
  )

}