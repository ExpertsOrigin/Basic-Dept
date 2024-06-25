import React from 'react'
import '../Assets/style/Careers.css'
export default function Careers() {
    return (
        <>
            <section className="careers">
                <div className="careerheader">
                    <div className="header-text">
                        <h1 className="career-h1-1">MAKE DOPESH*T.<i class="fa-solid fa-circle career-circle"></i>&nbsp;&nbsp;&nbsp;&nbsp; GET PAID.</h1>
                    </div>
                    <div className="header-image"><img src={require('../Assets/images/careerimg.png')} alt="image loading" />
                        <p className="header-image-p">OPENINGS (00) </p>
                        <p className="header-image-p">OFFICES(08) </p>
                    </div>
                </div>

                <div className="career-2">
                    <p className="career-2-p">
                        As part of Dept, we operate offices &nbsp; <i class="fa-solid fa-circle career-circle"></i> across the world. We're always looking to connect with individuals who want to make the best work of their lives with the world's greatest brands. If you're interested in working with us or learning more, drop us a note, portfolio link, or résumé. We'll take anything you've got.
                        <button>APPLY HERE</button>
                    </p>

                </div>



            </section>


        </>
    )
}
