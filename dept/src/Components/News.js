import React from 'react'
import '../Assets/style/News.css'
import datanews from '../Assets/data/new';

export default function News({datanews}) {
  return (
    <>
    <section className="newsheader">
        <h1 className="news-h1-1">NEWS <i class="fa-solid fa-circle newscircle"></i></h1>

    </section>
    
    
    <div className="think-1">
                    <div className="think-buttons">
                        <a href="#"><input type="radio" /> VIEW ALL</a>
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
