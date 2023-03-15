import React from 'react'
import "../assets/scss/Footer.scss"
import facebook from "../assets/images/facebook 1.svg"
import linkedin from "../assets/images/linkedin 1.svg"
import search from "../assets/images/search 1.svg"

function Footer() {
  return (
    <>
    
      <div className='container footer_container text-lg-center'id="footer">
      <div className='row mx-auto'>
        <div className='col-lg-3 text-lg-center mt-3'>
          <h5 className='footer_title'>Social</h5>    
          <ul>
            <li>
              <img src={facebook} className='px-2' />
              <a href='https://www.facebook.com/'>Facebook</a>
              </li>
            <li>
              <img src={linkedin} className='pe-2'/>
              <a href='https://www.linkedin.com/'>Linkdin</a>
              </li>
            <li>
              <img src={search} className='pe-2' />
              <a href='https://www.google.com/'>Google +</a>
              </li>
          </ul>
        </div>
        <div className='col-lg-3 col-md-12 col-sm-12 mt-3 text-lg-center'>
          <h5 className='footer_title '>Explore</h5>
          <ul>
            <li>Services</li>
            <li>Team</li>
            <li>Clients</li>
          </ul>
        </div>
        <div className='col-lg-3 col-md-12 col-sm-12   mt-3'>
          <h5 className='footer_title'>Contact</h5>
          <ul>
            <li>Lorem Ipsum dummy addres</li>
            <li>used for display</li>
            <li>1234567890</li>
          </ul>
        </div>
        <div className='col-lg-3 col-md-12 col-sm-12  mt-3 '>
          <h5 className='footer_title'>Email</h5>
          <a href = "mailto: mendlesoncommunication@email.com">mendlesoncommunication@email.com</a>
        </div>
      </div>
      </div>
      <p className='text-center mt-3'>© Copyright 2018 Mendleson Communication Pvt Ltd </p>
     </>
  )
}
  

export default Footer