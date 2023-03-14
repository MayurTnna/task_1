import React from 'react'
import "../assets/scss/Services.scss"
import "../assets/scss/Ourteam.scss"
import person1 from "../assets/images/Person 1 img 1.svg"
import person2 from "../assets/images/Person 2 img 1.svg"
import person3 from "../assets/images/Person 3 img 1.svg"

function Ourteam() {
  return (
    <div className='container team-container'>
         <h2 className='team-title'>OUR TEAM</h2>
            <p className='team-border mx-auto'></p>
            <div className='row mt-5'>
                <div className='col-lg-4'>
                    <img src={person1}></img>
                    <p className='pt-5'>Jessica D’suza</p>
                </div>
                <div className='col-lg-4'>
                    <img src={person2}></img>
                    <p className='pt-5'>Johny Williams</p>
                </div>
                <div className='col-lg-4'>
                    <img src={person3}></img>
                    <p className='pt-5'>Sanya R,</p>
                </div>
            </div>
    </div>
  )
}

export default Ourteam