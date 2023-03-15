import React from "react";
import '../assets/scss/Aboutus.scss'
import Aboutimg from "../assets/images/about us 1.svg"
import settingicon from "../assets/images/Enagagement icon 1.svg"
import communicationicon from "../assets/images/coomunication icon 1.svg"

function Aboutus() {
  return (
    <div className='container about-container' id="About">
            <div className='row align-items-center'>
                <div className='col-lg-6 col-md-12 '>
                    <img src={Aboutimg} className="img-fluid"></img>
                </div>
                <div className='col-lg-6 col-md-12 '>
                    <h2 className='about-title'>ABOUT US</h2>
                    <p className='main-border'></p>
                    <p className=' mt-4'>We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creaKvity, results and excepKonal levels of customer service and professionalism. We specialise in infrastructure development, energy and natural resources.</p>
                    <div className='row'>
                        <div className='col-lg-6 col-sm-12 text-lg-start text-center '>
                            <img src={settingicon} className="img-fluid "></img>
                            <h5 className='pt-4 '>Engagement</h5>
                            <p className="pt-3 para-text ">
                            We are engagement specialists, who have led projects at all levels of the IAP2 spectrum.
                            </p>
                            <a href='#' className='read-more'>READ MORE</a>
                        </div> 
                         <div className='col-lg-6 col-sm-12 text-lg-start  text-center'>
                            <img src={communicationicon} className="img-fluid"></img>
                            <h5 className='pt-4'>Communications</h5>
                            <p className="pt-3 para-text ">
                            We are engagement specialists, who have led projects at all levels of the IAP2 spectrum.
                            </p>
                            <a href='#' className='read-more'>READ MORE</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default Aboutus;
