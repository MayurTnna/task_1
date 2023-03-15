import React from 'react'
import "../assets/scss/Ourclient.scss"
import client1 from "../assets/images/client1.svg"
import client2 from "../assets/images/client2.svg"
import client3 from "../assets/images/client3.svg"
import client4 from "../assets/images/client4.svg"
import client5 from "../assets/images/client5.svg"
import client6 from "../assets/images/client6.svg"
import client7 from "../assets/images/client7.svg"
import client8 from "../assets/images/client8.svg"
import client9 from "../assets/images/client9.svg"
import client10 from "../assets/images/client10.svg"


function Ourclients() {
  return (
    <>
    <div className='container client_container'id="client">
        <h2 className='client_title'>OUR CLIENTS</h2>
                <p className='main-border mx-auto'></p>
                <div className='row justify-content-center align-items-center text-center gy-5'>
                    <div className='col-lg-3 col-md-6 col-sm-6 '>
                        <img src={client1} className="img-fluid" onMouseOver={event=>(event.currentTarget.src=`{client8}`
                            )}></img>
                    </div>
                    <div className='col-lg-2 col-md-6 col-sm-6'>
                        <img src={client2} className="img-fluid" ></img>
                    </div>
                    <div className='col-lg-2 col-md-6 col-sm-6'>
                        <img src={client3} className="img-fluid" ></img>
                    </div>
                    <div className='col-lg-2 col-md-6 col-sm-6'>
                        <img src={client4} className="img-fluid" ></img>
                    </div>
                    <div className='col-lg-3  col-md-6 col-sm-6'>
                        <img src={client5} className="img-fluid" ></img>
                    </div>
                </div>
                <div className='row justify-content-center align-items-center text-center gy-5'>
                    <div className='col-lg-3 col-md-6 col-sm-6 '>
                        <img src={client6} className="img-fluid" ></img>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-6'>
                        <img src={client7} className="img-fluid" ></img>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-6'>
                        <img src={client8} className="img-fluid" ></img>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-6'>
                        <img src={client9} className="img-fluid" ></img>
                    </div>
                </div>

    </div>
    <div className='client_left'><img src={client10}></img></div>
    </>
  )
}

export default Ourclients