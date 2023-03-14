import React from 'react'
import '../assets/scss/Ourprojects.scss'
import building from '../assets/images/building1.svg'
import building1 from '../assets/images/project2.svg'
import building2 from '../assets/images/project3.svg'

function Ourprojects() {
  return (
    <div className='container project-container'>
         <h2 className='project_title'>OUR PROJECTS</h2>
            <p className='project_border mx-auto'></p>
            <div className='row mt-5'>
                <div className='col-lg-6'>
                    <img src={building}></img>
                </div>
                <div className='col-lg-6'>
                    <img className='my-4' src={building1}></img>
                    <img className='my-4'src={building2}></img>
                </div>
            </div>
        
        

    </div>

  )
}

export default Ourprojects