import React from 'react'
import '../Assets/style/Contact.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Contactcards from '../Assets/data/Contactcards';
export default function Contact({ state }) {
    return (
        <>
            {/* @@@@    Section  =  1   @@@@@@ */}
            <div className="contact-header">
                <div className="contact-header-1">
                    <img src={require('../Assets/images/image_5.png')} alt="image loading" /></div>
                <div className="contact-header-2">
                    <h1 className="contact-header-h1-1">B/D CONTACT</h1>
                    <p className="contact-header-p-1">EASY TO UNDERSTAND IMPOSSIBLE TO IGNORE BASIC/DEPT,INC 10-24</p>
                    <div className="empty-circle"></div>
                    <div className="header-cards">
                        <div className="cards-1"><h3 className="cards-h3-1">NEW BUSINESS</h3><a href="#">biz@basicagency.com</a></div>
                        <div className="cards-1"><h3 className="cards-h3-1">GENERAL</h3><a href="#">hi@basicagency.com</a></div>
                        <div className="cards-1"><h3 className="cards-h3-1">PRESS</h3><a href="#">press@basicagency.com</a></div>
                        <div className="cards-1 join"><h3 className="cards-h3-1">JOIN US</h3><a href="#">recruitment@basicagency.com</a></div>
                        {/* <button>APPLY NOW</button> */}
                    </div>


                </div>
            </div>

            {/* @@@@    Section  =  2   @@@@@@ */}
            <div className="offices">
                <div className="office-images">
                <h1 className="offices-h1-1">OFFICES</h1>
                   
{
    state.map((res)=>{
        const {title1,desc,img1,img2,h1,h2,p1,p2} = res;
        return(
            <>
            
<div className="work-cards">

<div className="work-card-text"><h1 className="work-card-text-h1-1">{title1}</h1> <p className="work-p-1">{desc}</p>

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
            </div>

<hr />

<div className="contact-last">
    <h1 className="contact-last-h1-1">FOLLOW</h1>
    <ul>
        <li><b>SOCIAL</b></li>
        <a href=""><li>Instagram</li></a>
        <a href=""><li>Twitter</li></a>
        <a href=""><li>LinkedIn</li></a>
        <a href=""><li>Facebook</li></a>
    </ul>
</div>





        </>
    )
}
