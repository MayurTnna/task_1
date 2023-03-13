import React from "react";
import '../assets/scss/Aboutus.scss'
import Aboutimg from "../assets/images/about us 1.svg";

function Aboutus() {
  return (
    <div className="container about-container">
      <div className="row">
        <div className="col-lg-6">
        <div className="about-image">
          <img src={Aboutimg} className=""></img>
        </div>
        </div>
        <div className="col-lg-6">
            <div className="about-title">
                <h1 className="title-text">About US</h1>
                <hr className="double-line"></hr>
            </div>


        </div>
      </div>
    </div>
  );
}

export default Aboutus;
