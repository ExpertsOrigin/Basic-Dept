import React from 'react'
import '../Assets/style/Footer.css'
export default function Footer() {
    return (
        <>
            <div className="footer-main">
                <div className="footer-1">
                    <h1 className="footer-h1-1">B/D</h1>
                    <h1 className="footer-h1-2">We collaborate with ambitious brands and people. Let's build. <a href="#">biz@basicagency.com</a></h1>
                </div>

                <div className="footer-2">
                    <div className="footer-2-1"><p className='footer-2-1-p'><i class="fa-solid fa-circle footercircle"></i> STAY IN THE KNOW</p> <input type="text" placeholder='Email Address' /></div>
                    <div className="footer-2-2">
                        <ul className='footer2-ul'>
                            <h6><i class="fa-solid fa-circle footercircle"></i> SOCIAL</h6>
                            <li>Instagram</li>
                            <li>Twitter</li>
                            <li>LinkedIn</li>
                            <li>Facebook</li>
                        </ul>
                        <ul className='footer2-ul'>
                            <h6> <i class="fa-solid fa-circle footercircle"></i> INITIATIVE</h6>
                            <li>Crafted</li>
                            <li>Applied</li>
                            <li>Brandbeats</li>
                            <li>Moves</li>
                            <li>B/Good</li>
                        </ul>
                        <ul className='footer2-ul'>
                            <h6> <i class="fa-solid fa-circle footercircle"></i> OFFICES</h6>
                            <li>San-Diego-CA</li>
                            <li>New York-NY</li>
                            <li>Bay Area-CA</li>
                            <li>St.Louis-MO</li>
                            <li>Amsterdam-NL</li>
                            <li>London-EN</li>
                            <li>Berlin-GE</li>
                            <li>Argentina-AR</li>
                        </ul>
                    </div>

                </div>

                <div className="footer-3">
                        <p className="footerp-1">BASIC/DEPT®, INC 10 - 24©</p>
                        <p className="footerp-2">EASY TO UNDERSTAND, IMPOSSIBLE TO IGNORE.™</p>
                        <p className="footerp-3"><a href="">TERMS, PRIVACY POLICY</a></p>
                    </div>









            </div>



        </>
    )
}
