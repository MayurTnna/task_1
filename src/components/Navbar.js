    import React from 'react'
    import '../assets/scss/Navbar.scss'
    import logo from '../assets/images/logo-1 1.svg'

    function Navbar() {
    return (
        <div className=' header-nav'>
        <nav className="navbar navbar-expand-lg "> 
         <div className="container-fluid nav-container">
        <a className="navbar-brand" href="#"><img src={logo} className=''></img></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="">X</span>
        </button>
        <div className="collapse navbar-collapse menu-items" id="navbarSupportedContent">
        <ul className="navbar-nav  mb-2 mb-lg-0">
            <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">About us</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Services</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Team</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Clients</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Contact us</a>
            </li>
        </ul>
        </div>
    </div>
    </nav>
        </div>
    )
    }

    export default Navbar