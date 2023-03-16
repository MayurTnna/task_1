import React from 'react'
import "../assets/scss/Footer.scss"
import facebook from "../assets/images/facebook 1.svg"
import linkedin from "../assets/images/linkedin 1.svg"
import search from "../assets/images/search 1.svg"

function Footer() {
  return (
    <>
    
    <div className='footer-container' id='footer'>
      <div className='container'>
      <div className='row'>
        <div className='col-lg-3 col-md-6 social_title'>
          <h5 className='footer_title'>Social</h5>    
          <ul>
            <li className='ps-2'>
              <img src={facebook} />
              <a href='https://www.facebook.com/'>Facebook</a>
              </li>
            <li>
              <img src={linkedin} />
              <a href='https://www.linkedin.com/'>Linkdin</a>
              </li>
            <li className='ps-2'>
              <img src={search} />
              <a href='https://www.google.com/'>Google+</a>
              </li>
          </ul>
        </div>
        <div className='col-lg-3 col-md-6 explore'>
          <h5 className='footer_title '>Explore</h5>
          <ul>
            <li><a href='#services'>Services</a></li>
            <li><a href='#team'>Team</a></li>
            <li><a href='#client'>Clients</a></li>
          </ul>
        </div>
        <div className='col-lg-3 col-md-6 contact_title'>
          <h5 className='footer_title'>Contact</h5>
          <ul>
            <li>Lorem Ipsum dummy addres</li>
            <li>used for display</li>
            <li>1234567890</li>
          </ul>
        </div>
        <div className='col-lg-3 col-md-6 email_title'>
          <h5 className='footer_title'>Email</h5>
          <a href = "mailto: mendlesoncommunication@email.com">mendlesoncommunication@email.com</a>
        </div>
      </div>
      </div>
      <p className='text-center'>© Copyright 2018 Mendleson Communication Pvt Ltd </p>
      </div>
     </>
  )
}
  

export default Footer