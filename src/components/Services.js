import React from 'react'
import engagement_main from '../assets/images/service_main.svg'
import '../assets/scss/Services.scss'
import communication_main from '../assets/images/communication_main.svg'
import facilitation_main from '../assets/images/facilation vector 1.svg'
import consultation_main from '../assets/images/Consultation vector 1.svg'
import training_main from '../assets/images/Training and vector 1.svg'
import side1 from '../assets/images/service_left.svg'
import side2 from '../assets/images/communication_right.svg'
import side3 from '../assets/images/facilation_left.svg'
import side4 from '../assets/images/consult_right.svg'
import side5 from '../assets/images/training_right.svg'

function Services() {
    return (
        <>
            <div id="service" className='container service-container' >
                <h2 className='service-title'>SERVICES</h2>
                <p className='main-border mx-auto'></p>
                <div className='row align-items-center mt-4 service-gap'>
                    <div className='col-lg-6 '>
                        <h3 className="text-lg-end text-md-center text-sm-center engagement-title">ENGAGEMENT</h3>
                        <p className="text-lg-end text-sm-center engagement-para">
                            We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creaKvity, results and excepKonal levels of customer service and professionalism. We specialise in infrastructure development, energy and natural resources.
                        </p>
                    </div>
                    <div className='col-lg-6 text-center'>
                        <img src={engagement_main} className="img-fluid order-md-2 order-sm-2"></img>
                    </div>
                </div>
                <div className='my-5 communication-container'>
                    <div className='row align-items-center service-gap'>
                        <div className='col-lg-6 order-lg-1 order-2 text-md-center'>
                            <img src={communication_main} className="img-fluid order-md-2 order-sm-2"></img>
                        </div>
                        <div className='col-lg-6 order-lg-2 order-1'>
                            <h3 className='comm-title text-sm-center text-lg-start'>COMMUNICATIONS</h3>
                            <p className='text-lg-start text-sm-center comm-para '>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus quam quis egestas orci. Scelerisque eu, vitae sapien, pellentesque et. Sit ac fames facilisis nibh faucibus.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='row align-items-center mt-4 service-gap'>
                    <div className='col-lg-6 '>
                        <h3 className="text-lg-end text-md-center text-sm-center engagement-title">FACILITATION</h3>
                        <p className="text-lg-end text-sm-center engagement-para">
                            We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creaKvity, results and excepKonal levels of customer service and professionalism. We specialise in infrastructure development, energy and
                            natural resources.
                        </p>
                    </div>
                    <div className='col-lg-6 text-center'>
                        <img src={facilitation_main} className="img-fluid order-md-2 order-sm-2"></img>
                    </div>
                </div>
                <div className='my-5 communication-container'>
                    <div className='row align-items-center service-gap'>
                        <div className='col-lg-6 order-lg-1 order-2 text-md-center'>
                            <img src={consultation_main} className="img-fluid"></img>
                        </div>
                        <div className='col-lg-6 order-lg-2 order-1'>
                            <h3 className='comm-title text-sm-center text-lg-start'>CONSULTATION AND RESEARCH</h3>
                            <p className='text-lg-start text-sm-center comm-para '>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus quam quis egestas orci. Scelerisque eu, vitae sapien, pellentesque et. Sit ac fames facilisis nibh faucibus.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='row align-items-center mt-4 service-gap'>
                    <div className='col-lg-6 '>
                        <h3 className="text-lg-end text-md-center text-sm-center engagement-title">TRAINING AND MENTORING</h3>
                        <p className="text-lg-end text-sm-center engagement-para">
                            We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creaKvity, results and excepKonal levels of customer service and professionalism. We specialise in infrastructure development, energy and
                            natural resources.
                        </p>
                    </div>
                    <div className='col-lg-6 text-center'>
                        <img src={training_main} className="img-fluid"></img>
                    </div>
                </div>
            </div>
            <div className='service_left'><img src={side1}></img></div>
             <div className='comm_right'><img src={side2}></img></div>
             <div className='faci_left'><img src={side3}></img></div>
            <div className='consult_right'><img src={side4}></img></div>
            <div className='train_left'><img src={side5}></img></div>

        </>
    )
}
export default Services