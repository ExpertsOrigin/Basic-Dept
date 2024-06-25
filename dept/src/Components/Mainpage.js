import React from 'react'
import '../Assets/style/Mainpage.css'
import datanews from '../Assets/data/new';

export default function Mainpage({datanews}) {
    return (
        <>
            <div className="mainpage-header">
                <video src={require('../Assets/images/mainpage-video.mp4')} typeof='video/mp4'></video>
            </div>
            <div className="main-section2">
                <div className="section-2-1"><h1 className="section-2-h1-1">AdAge</h1><p className="section-2-p-1">DESIGN AND BRANDING AGENCY OF THE YEAR</p></div>
                <div className="section-2-1"><h1 className="section-2-h1-1">The Webby Awards</h1><p className="section-2-p-1">AGENCY OF THE YEAR</p></div>
                <div className="section-2-1"><h1 className="section-2-h1-1">campaign</h1><p className="section-2-p-1">DIGITAL INNOVATION AGENCY OF THE YEAR FINALIST</p></div>
            </div>

            <div className="main-section-3">
                <p className="main-section-3-p-1">BASIC/DEPT® is a global branding and digital design agency building products, services, and eCommerce experiences that turn cultural values into company value.
                    <button className='.main-section-3-btn'>SEE THE WORK</button>
                </p>
                <h1 className="main-section-3-h1-1">B/D</h1>


            </div>

            <div className="main-section-4">
                <div className="section-4-img">
                    <img src={require('../Assets/images/main(1).png')} alt="img loading" /> <h3 className="img-h3">PATAGONIA</h3><p className="img-p-1">AN ECOMMERCE EXPERIENCE DRIVEN BY PATAGONIA</p> </div>
                <div className="section-4-img">
                    <img src={require('../Assets/images/main(2).png')} alt="img loading" /> <h3 className="img-h3">WILSON</h3><p className="img-p-1">SPORT BRAND FINDING ITS PLACE IN CULTURE</p> </div>
                <div className="section-4-img">
                    <img src={require('../Assets/images/work(1).png')} alt="img loading" /> <h3 className="img-h3">GOOGLE STORE</h3><p className="img-p-1">AN ECOMMERCE EXPERIENCE HELPING GOOGLE BRING ITS HARDWARE</p> </div>
            </div>

            <div className="engagement">
                <h1 className="engagement-h1-1">FEATURED ENGAGEMENTS</h1>
                <div className="engage-companies">
                    <div className="engage-company-1"><h1 className="company-1-h1-1">Google</h1><h3 className="company-1-h1-2">GOOGLE</h3><p className="c-p-1">Our embedded partnership with Google is as deep as it gets. We're the lead creative agency for Google Store and provide strategy, design, and prototyping to other divisions. Learn more about our partnership here.</p></div>

                    <div className="engage-company-1"><h1 className="company-1-h1-1">KFC</h1><h3 className="company-1-h1-2">KFC</h3><p className="c-p-1">Our embedded partnership with Google is as deep as it gets. We're the lead creative agency for Google Store and provide strategy, design, and prototyping to other divisions. Learn more about our partnership here.</p></div>

                    <div className="engage-company-1"><h1 className="company-1-h1-1">Wilson</h1><h3 className="company-1-h1-2">WILSON</h3><p className="c-p-1">Our embedded partnership with Google is as deep as it gets. We're the lead creative agency for Google Store and provide strategy, design, and prototyping to other divisions. Learn more about our partnership here.</p></div>

                    <div className="engage-company-1"><h1 className="company-1-h1-1">AT&T</h1><h3 className="company-1-h1-2">AT&T</h3><p className="c-p-1">Our embedded partnership with Google is as deep as it gets. We're the lead creative agency for Google Store and provide strategy, design, and prototyping to other divisions. Learn more about our partnership here.</p></div>

                    <div className="engage-company-1"><h1 className="company-1-h1-1">Patagonia</h1><h3 className="company-1-h1-2">PATAGONIA</h3><p className="c-p-1">Our embedded partnership with Google is as deep as it gets. We're the lead creative agency for Google Store and provide strategy, design, and prototyping to other divisions. Learn more about our partnership here.</p></div>
                </div>
            </div>

<div className="main-second-last">
    <div className="main-last-h1-1"><h1 className="last-h1-1">BASIC/DEPT HELPS BRANDS CONNECTW/ CULTURE</h1></div>
    <div className="second-img">
        {/* <img src={require('../Assets/images')} alt="" /> */}
    </div>
</div>


 
<div className="think-1">
                    <div className="think-buttons">
                        <a href="#" id='link-1'><input type="radio"  /> VIEW ALL</a>
                        <a href="#"><input type="radio" /> PRESS</a>
                        <a href="#"><input type="radio" /> EVENTS</a>
                        <a href="#"><input type="radio" /> AWARDS</a>
                        <a href="#"><input type="radio" /> WORK</a>
                    </div>


                    {
                        datanews.map((res)=>{
                            const {title1,title2,img} = res;
                            return(
                                <>
                                <a href="#"><div className="thinkingimages"><img src={img} alt="" />
                        <h1 className="thinkingimg-h1-1 newsh1-2">{title1}</h1>
                        <p className="thinkingimages-p newsh1-2">{title2}</p>
                    </div></a>
                                
                                </>
                            ) 
                        })
                    }



                    
                </div>


        </>
    )
}
