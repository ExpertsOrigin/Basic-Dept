import React from 'react'
import '../Assets/style/About.css'
import aboutdata from '../Assets/data/aboutdata';
export default function About({ data }) {
    return (
        <>
            <section className="aboutheader">
                <div className="aboutheader-1"><h1 className="about-header-h1-1">WE TURN CULTURAL VALUE</h1></div>
                <div className="aboutheader-2"><h1 className="about-header-h1-2"><i class="fa-solid fa-circle"></i> INTO COMPANY VALUE</h1>
                    <p className="headerabout-p-1">BASIC/DEPT® is a global agency that thrives at the intersection of design, data, and technology. Together, we're focused on transforming brands and culture — across the world.</p>
                </div>
            </section>


            <section className="about-images">
                <p className="about-image-p">EASY TO UNDERSTAND. IMPOSSIBLE TO IGNORE.™ BASIC/DEPT®, INC 10 - 24©</p>

                <div className="about-images-1">
                    <img src={require('../Assets/images/about(1).png')} alt="img loading" className="image-1" />
                    <img src={require('../Assets/images/about(2).png')} alt="img loading" className="image-2" />
                    <img src={require('../Assets/images/about(21).png')} alt="img loading" className="image-3" />
                    <img src={require('../Assets/images/about(20).png')} alt="img loading" className="image-4" />

                </div>



            </section>



            <h1 className="about-h1-3">BASIC/DEPT</h1>

            <div className="agency">
                <h1 className="agency-h1-1">AGENCY SNAPSHOT</h1>
                <div className="agencycards">


                    {
                        data.map((res) => {
                            const { title1, title2, desc } = res;
                            return (
                                <>
                                    <div className="agency-card-1"><p className='card-p'>{title1}</p><h1 className="cardnumber">{title2}</h1><p className="agency-detail">{desc}</p></div>
                                </>
                            )
                        })
                    }




                </div>
            </div>


{/* <hr /> */}
            <div className="capabilities">
                <h1 className="capa-h1-1">CAPABILITIES</h1>
                <div className="capapara">
                    <div className="para1"><h2 className="para1-h2">CX, COMMERCE, & PRODUCT DESIGN</h2><p className="para1-p1">Market Analysis & Business Case Development <br />

                        Customer Research, Segmentation & Insights <br />

                        Journey Mapping & Testing <br />

                        Innovation Sprints & Prototyping <br />

                        Experience Strategy & Design <br />

                        Content Strategy & IA <br />

                        Design Systems & Guidelines <br />

                        Website & App Design <br />

                        UI Design <br />

                        Interaction Design <br />

                        Full-Stack Development & CMS Implementati</p></div>
                    <div className="para1"><h2 className="para1-h2">DIGITAL-FIRST BRANDING</h2> <p className="para1-p2">Brand Ecosystem & Roadmap <br />

                        Business Intelligence <br />

                        Brand Positioning & Architecture <br />

                        Brand Messaging <br />

                        Visual Identity <br />

                        Brand Guidelines & Playbooks <br />

                        Visual Design <br />

                        Graphic Design <br />

                        Art Direction <br />

                        Asset Production (Video, 3D, Photography, Motion Design) <br />

                        Brand Naming <br />

                        Go-To-Market Strategy <br />

                        Campaign Development</p></div>
                </div>
            </div>

<div className="awards">
    <h1 className="awards-h1-1">AWARDS</h1>
    <p className="awards-p-1">While results are what matter most, we believe awards bring value and recognition to organizations as well as individuals.
    <button>FULLAWARDSLIST</button>
    </p>
</div>

<div className="award-links">
    <a href="" className="links-h1">WEBBY AWARDS <sup>/145</sup></a>
    <a href="" className="links-h1">ADWEEK <sup>/01</sup></a>
    <a href="" className="links-h1">AWWWARDS <sup>/28</sup></a>
    <a href="" className="links-h1">D&AD <sup>/01</sup></a>
    <a href="" className="links-h1">ONE SHOW <sup>/05</sup></a>
    <a href="" className="links-h1">THE FWA <sup>/09</sup></a>
    <a href="" className="links-h1">COMM ARTS <sup>/04</sup></a>
</div>


<div className="leadership">
    <h1 className="leadership-h1">TEAM & LEADERSHIP</h1>
    <p className="leadership-p-1">
    We're 120+ individuals from across the world driven by bold ideas and diverse perspectives. Craft, service, and efficiency drive us forward and we see our agency as a place for our shared values to collide.
    </p>

</div>


<div className="about-last-images">
            <img src={require('../Assets/images/about(3).png')} alt="" />
            <img src={require('../Assets/images/about(4).png')} alt="" />
            <img src={require('../Assets/images/about(6).png')} alt="" />
            <img src={require('../Assets/images/about(7).png')} alt="" />
            <img src={require('../Assets/images/about(5).png')} alt="" />
            <img src={require('../Assets/images/about(8).png')} alt="" />
            <img src={require('../Assets/images/about(9).png')} alt="" />
            <img src={require('../Assets/images/about(10).png')} alt="" />
            <img src={require('../Assets/images/about(13).png')} alt="" />
            <img src={require('../Assets/images/about(11).png')} alt="" />
            <img src={require('../Assets/images/about(12).png')} alt="" />
            <img src={require('../Assets/images/about(14).png')} alt="" />
            <img src={require('../Assets/images/about(15).png')} alt="" />
            <img src={require('../Assets/images/about(16).png')} alt="" />
            <img src={require('../Assets/images/about(19).png')} alt="" />
            <img src={require('../Assets/images/about(17).png')} alt="" />
            <img src={require('../Assets/images/about(18).png')} alt="" />
            <img src={require('../Assets/images/about(16).png')} alt="" />


</div>








        </>
    )
}
