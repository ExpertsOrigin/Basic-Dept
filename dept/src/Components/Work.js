import React from 'react'
import '../Assets/style/Work.css'
import mywork from '../Assets/data/workpage';
import { Link } from 'react-router-dom';
import industries from '../Assets/data/industries';
import allwork from '../Assets/data/allwork';


export default function Work({work}) {
  return (
    <>
    <div className="work-header">
        <h1 className="work-header-h1-1">EASY TO UNDERSTAND.<i class="fa-solid fa-circle"></i> IMPOSSIBLE TO IGNORE</h1>
    </div>
    
    <div className="work-details">
        <div className="work-links">
            <Link to="/work" className='mywork-links'>SERVICES</Link>
            <Link to="/industries" className='mywork-links'>INDUSTRIES</Link>
            <Link to="/allwork" className='mywork-links'>ALL WORK</Link>
            
        </div>

{
    work.map((res)=>{
        const {title1,desc,img1,img2,h1,h2,p1,p2} = res;
        return(
            <>
            
<div className="work-cards">

<div className="work-card-text"><h1 className="work-card-text-h1-1">{title1}</h1> <p className="work-p-1">{desc}</p>
<button>LEARN MORE</button>
</div>
<div className="work-images">
    <div className="work-img-1">
        <img src={img1} alt=""></img>
        <h4 className="img1-h1-1">{h1}</h4>
        <p className="img1-p-1">{p1}</p>
         </div>
    <div className="work-img-1">
        <img src={img2} alt=""></img>
        <h4 className="img1-h1-1">{h2}</h4>
        <p className="img1-p-1">{p2}</p>

        </div>
</div>




</div>

            
            
            
            </>
        )
    })
}










  














    </div>













    </>
  )
}
