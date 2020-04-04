/**
 * recruit page
 * 
 * @2020/03/24
 */
import React from 'react'
import Layout from "../components/layout"
import SendResume from "../components/sendResume"

export default function RecruitPage() {

  return (
    <Layout activeMenu="recruit">
      <section id="recruit" className="section-recruit base-bg">
        <div className="section textCenter ">
            <div className="recruit-box">
                <ul id="myTab" className="nav nav-pills nav-justified" >
                    <li role="presentation" className="active">
                      <a href="#PrincipalDataScientist" role="tab" data-toggle="pill">Principal Data Scientist</a>
                    </li>
                    <li role="presentation">
                      <a href="#DataEngineer" role="tab" data-toggle="pill">Data Engineer</a>
                    </li>
                    <li role="presentation">
                      <a href="#DataAnalyst" role="tab" data-toggle="pill">Data Analyst</a>
                    </li>
                </ul>
                <div id="myTabContent" className="tab-content">
                    <div className="tab-pane fade in active padlr50" id="PrincipalDataScientist">
                        <div className="work-title">Principal Data Scientist</div>
                        <p><span className="work-list-name">Data Posted:</span> March 1st 2019</p>
                        <p><span className="work-list-name">Type:</span> Full-time, permanent</p>
                        <p><span className="work-list-name">Career Level:</span> 5+ Years Experiences</p>
                        <p><span className="work-list-name">Category:</span> Information Technology</p>
                        <p>Marine Thinking Inc. is a rapidly growing tech company based in Halifax, NS looking for a Principal Data Scientist to join our AI team. You will lead a world className data science team to work with our data, designing novel machine learning model to identify and answer questions in high-dimensional data space using your abilities and intuitions. Broadly speaking, you'll need to effectively leverage your computational skills, experience to build machine learning models with high-dimensional datasets including videos, audios and point clouds etc.</p>
                        <br />

                        <div className="work-list-title">Job Description</div>
                        <p>The Principal Data Scientist role requires working closely with the robotic team to understand how our data is being generated in order to discover, measure, and improve the quality and information content of our multidimensional data. Competency in devising and performing exploratory analyses for a wide range of experimental questions and recommending follow-up experiments or solutions is critical to success in this role. Once identified, you will need to scale the solutions, metrics, and analyses that you develop and deploy them in collaboration with our engineering teams in order to advance our platform. As a principal data scientist, you will also leverage your past experience to effectively gauge the scope and impact of your projects against the broader team and company goals in collaboration as a team lead, in addition to independently executing on those projects.</p>

                        <div className="work-list-title">Requirements:</div>                                
                        <ul>
                            <li>Master of science degree in Computer Science or related technical field</li>
                            <li>Solid experience with building and managing big data platform (such as Hadoop, Spark, HDFS, Hive, Docker, Kubernetes, Mesos) and with data processing pipe lines(MapReduce, Flume, Kafka, Mqtt).</li>
                            <li>Solid experience with major deep learning platforms like tensorflow, torch, caffe and mxnet etc.</li>
                            <li>A track record of outstanding past projects, experience in designing, developing and deploying machine learning models to real customers in large scale(100-1000nodes).</li>
                            <li>Experience in writing software in one or more languages such as Scala, Java, C++, Python, Go and/or JavaScript.</li>
                            <li>Relational/Non-relational databases including Oracle,Mysql, Mongo and Cassandra etc.</li>
                            <li>Experience managing internal or client-facing projects to completion; experience troubleshooting clients' technical issues; experience with managing engineering teams and working with other teams in sales, services, and customers.</li>
                            <li>High fluency and the equivalent skills of 5+ years of experience in image/signal analysis, machine learning, coding, and data modeling.</li>
                            <li>The ability to structure unstructured problems, even those without a clearly defined measure of success, in order to derive conclusions and make decisions amidst great uncertainty.</li>
                            <li>Code you can share. Send a link along with your email (github,gitlab etc). </li>
                            <li>Intellectual curiosity and the professional skill-set to excel in an open, highly collaborative environment.</li>
                        </ul>
                        <SendResume />
                    </div>
                    
                    <div className="tab-pane fade padlr50" id="DataEngineer">
                        <div className="work-title">Data Engineer</div>
                        <p><span className="work-list-name">Data Posted:</span> March 1st 2019</p>
                        <p><span className="work-list-name">Type:</span> Full-time, permanent</p>
                        <p><span className="work-list-name">Career Level:</span> 3+ Years Experiences</p>
                        <p><span className="work-list-name">Category:</span> Information Technology</p>
                        <p>Marine Thinking Inc. is a rapidly growing tech company based in Halifax, NS looking for a Data Engineer to join our AI team. You will work with a world className data science team to work with our data, designing novel machine learning model to identify and answer questions in high-dimensional data space using your abilities and intuitions. Broadly speaking, you'll need to effectively leverage your computational skills, experience to build machine learning models with high-dimensional datasets including videos, audios and point clouds etc.</p>
                        <br />
                        <div className="work-list-title">Job Description</div>
                        <p>The Data Engineer will support AI team to design, build and maintain our big data platform, help implementing and scaling machine learning models to solve real world problems. Work is non-routine and very complex, involving the application of advanced technical/business skills in area of specialization 3 years of experience supporting distributed big data platform.</p>
                        <ul>
                            <li>The design, care, and feeding of our Big Data environments built upon technologies in the Hadoop Ecosystem</li>
                            <li>Day-to-day troubleshooting of problems and performance issues in our clusters</li>
                            <li>Investigate and characterize non-trivial issues in various environments</li>
                            <li>Deep understanding of system architecture and ability to validate system configurations from hardware layer to Hadoop Application layer</li>
                            <li>Work closely with Operations and Development teams</li>
                            <li>Work simultaneously on multiple projects competing for your time and understand how to prioritize accordingly</li>
                            <li>Be part of the on-call rotation</li>
                            <li>Willingness to mentor and teach people around you</li>
                        </ul>
                        <br />
                        <div className="work-list-title">Requirements</div>
                        <ul>
                            <li>Bachelor's degree in Computer Science or a closely related computer technical field and 3+ years of Hadoop Administration experience</li>
                            <li>Intimate and extensive knowledge of Linux Administration and Operational practices.</li>
                            <li>Experience in designing, implementing and administering large (100 nodes - 1000 nodes), highly available Hadoop clusters</li>
                            <li>In-depth knowledge of capacity planning, management, and troubleshooting for HDFS, YARN/MapReduce, HBase</li>
                            <li>Understanding cluster capacity and bottlenecks, basics of memory, CPU, OS, storage, and networks</li>
                            <li>An advanced background with a higher-level scripting language, such as Java, Python or Go</li>
                            <li>Must have experience with monitoring tools used in the Hadoop ecosystem such as Nagios and Ambari</li>
                            <li>Experience with modern data pipelines, data streaming, and real time analytics using tools such as Apache Kafka, Spark Streaming, or similar tools</li>
                            <li>Experience with containerization (Kubernetes) is a plus</li>
                            <li>Intellectual curiosity and the professional skill-set to excel in an open, highly collaborative environment.</li>
                        </ul>
                        <SendResume />
                    </div>

                    <div className="tab-pane fade padlr50" id="DataAnalyst">
                        <div className="work-title">Data Analyst</div>
                        <p><span className="work-list-name">Data Posted:</span> March 1st 2019</p>
                        <p><span className="work-list-name">Type:</span> Full-time, permanent</p>
                        <p><span className="work-list-name">Career Level:</span> 3+ Years Experiences</p>
                        <p><span className="work-list-name">Category:</span> Information Technology</p>
                        <p>Marine Thinking Inc. is a rapidly growing tech company based in Halifax, NS looking for a Data Engineer to join our AI team. You will work with a world className data science team to work with our data, designing novel machine learning model to identify and answer questions in high-dimensional data space using your abilities and intuitions. Broadly speaking, you'll need to effectively leverage your computational skills, experience to build machine learning models with high-dimensional datasets including videos, audios and point clouds etc.</p>
                        <br />

                        <div className="work-list-title">Job Description</div>
                        <p>The Data Analyst will support AI Engineering with core KPI reporting and dashboarding, providing insights to identify opportunities for growth and improvement throughout the business.</p>
                        <br />
                        
                        <ul>
                            <li>Collaborate with business stakeholders and analyze user requirements to deliver end to end reporting and analytic solutions</li>
                            <li>Support strategic initiatives throughout the company with data analysis and insights</li>
                            <li>Create interactive dashboards and visualizations leveraging SFDC Einstein Analytics, Tableau, Qlik, or other BI dashboarding tools. </li>
                            <li>Build and maintain dashboards and reports that help engineer understand performance and quickly diagnose issues</li>
                            <li>Build required data extracts required for solutions from SFDC, Hadoop and other Platform systems </li>
                            <li>Assist with Analysis, architecture, design, and development of ETL, data warehouse and business intelligence needs</li>
                            <li>Create functional and technical documentation related to Business Intelligence solutions</li>
                            <li>Deliver ad-hoc and other analysis of company KPI’s to support decision making and forecasting</li>
                        </ul>
                        <br />
                        <div className="work-list-title">Requirements</div>
                        <ul>
                            <li>Bachelor’s Degree desired in Business, Information Technology, or quantitative related field</li>
                            <li>Four to six years of progressive post-baccalaureate experience in Business Intelligence or Information Management,</li>
                            <li>Two plus years of experience with data visualization, implementing high-value solutions and performing administrative activities across multi-environment infrastructure</li>
                            <li>Knowledge of Data Visualization programs such as Tableau, Qlik, or SFDC Einstein Analytics</li>
                            <li>Working knowledge of SQL and Python a plus</li>
                            <li>Experience in and ability to manage and work with business leaders to assess needs</li>
                            <li>Highly self-motivated to deliver both independently and with strong team collaboration</li>
                            <li>Exceptional analytical, conceptual, and problem-solving abilities</li>
                            <li>Ability to creatively take on new challenges and work outside comfort zone</li>
                            <li>Enthusiasm to grow deep skill set in SFDC Einstein Analytics, Tableau</li>
                            <li>Strong ability and desire to develop the technical skills needed to work with large data sets</li>
                            <li>Basic understanding of statistics and hypothesis testing</li>
                            <li>Able to think strategically and drill into open-ended problems Professional Skills</li>
                            <li>Ability to frame and understand critical business needs and translate those needs into reporting</li>
                            <li>Ability to work creatively and analytically in a fast-paced self-starter environment</li>
                            <li>Desire to work in a high growth, ever-changing environment</li>
                            <li>Excellent leadership, communication (written and oral) and interpersonal skills Additional Preferred Experience</li>
                            <li>SFDC experience and/or certification a plus, particularly SFDC Einstein Analytics (Wave Analytics)</li>
                            <li>Some knowledge of SQL, Python Benefits</li>
                            <li>Intellectual curiosity and the professional skill-set to excel in an open, highly collaborative environment</li>
                        </ul>
                        <SendResume />
                    </div>
                </div>
            </div>
        </div>
      </section>
    </Layout>
  )

}