import React from 'react'
import '../Assets/style/Thinking.css'
import data from '../Assets/data/Thinkingdata';
export default function Thinking({data}) {
    return (
        <>
            <section className="thinking-header">
                <h1 className="thinking-header-h1-1">THINKING</h1>
                <i class="fa-solid fa-circle thinkingcircle"></i>
                <div className="thinking-header-p">
                    <p className="header-p-2"><strong>BRANDBEATS</strong></p>

                    <p className="header-p-2"><strong>APPLIED</strong></p>
                    <p className="thinkingheader-p-1">Brandbeats is our agency podcast garnering over 45,000+ listens per episode where we discuss industry happenings for 30 minutes as well as provide ten tracks of curated music. Our conversations are a candid exploration of design topics, branding trends, and experiences we're noticing in culture.</p>
                    <p className="thinkingheader-p-1">Applied is our panel series and thought-leadership platform where we share perspectives and tactics related to strategy, design, and technology. The content is raw and driven by honest observations and guided questions that use culture to explain why trends exist and how they impact business and tech.</p>
                </div>


                <div className="think-1">
                    <div className="think-buttons">
                        <a href="#"><input type="radio" /> VIEW ALL</a>
                        <a href="#"><input type="radio" /> BRANDBEATS</a>
                        <a href="#"><input type="radio" /> APPLIED</a>
                    </div>


                    {
                        data.map((res)=>{
                            const {title1,title2,img} = res;
                            return(
                                <>
                                <a href="#"><div className="thinkingimages"><img src={img} alt="" />
                        <h1 className="thinkingimg-h1-1">{title1}</h1>
                        <p className="thinkingimages-p">{title2}</p>
                    </div></a>
                                
                                </>
                            ) 
                        })
                    }



                    
                </div>











            </section>

        </>
    )
}
