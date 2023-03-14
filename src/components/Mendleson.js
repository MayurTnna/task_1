import React from 'react'
import '../assets/scss/Mendleson.scss'
import Asset1 from '../assets/images/Asset 1.svg'
import Asset2 from '../assets/images/Asset 2.svg'
import Asset3 from '../assets/images/Assets 3.svg'
import Asset4 from '../assets/images/Graphic 1 2.svg'
import Asset5 from '../assets/images/vector_smart.svg'
import Asset6 from '../assets/images/Assets 4.svg'
import Navbar from './Navbar'

function Mendleson() {
    return (
        <div className='first '>
            <div className='head-images'>
                <img src={Asset1} className='img1'></img>
                <img src={Asset2} className='img2'></img>
            </div>
            <Navbar />
            <div className='mendleson-para'>
                <div>
                <h1 className='mend-title'>Mendleson
                    Communication
                    and Engagement</h1>
                    <p className='mend-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada sed ipsum, ut quam volutpat, tortor.</p>
                    </div>
            </div>
            <div className='bottom-images'>
                <img src={Asset3} className='img3'></img>
                <img src={Asset4} className='img4'></img>
                <img src={Asset5} className='img5'></img>
                <img src={Asset6} className='img6'></img>
            </div>
        </div>
    )
}

export default Mendleson