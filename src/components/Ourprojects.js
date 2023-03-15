import React from "react";
import "../assets/scss/Ourprojects.scss";
import building from "../assets/images/building1.svg";
import building1 from "../assets/images/project2.svg";
import building2 from "../assets/images/project3.svg";
import project from "../assets/images/project.svg"

function Ourprojects() {
  return (
    <>
    <div className="container project-container">
      <h2 className="project_title">OUR PROJECTS</h2>
      <p className="project_border mx-auto"></p>
      <div className="row mt-5">
        <div className="col-md-6 col-sm-12 mt-4 image-container">
          <img src={building} className="img-fluid image" />
          <div className="overlay">
            <div className="text">PROJECTS<br/>NAME</div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 mt-4">
          <div className="col-md-12 col-sm-12 image-container">
            <img src={building1} className="img-fluid" />
            <div className="overlay">
              <div className="text">PROJECTS NAME</div>
            </div>
          </div>
          <div className="col-md-12 col-sm-12 mt-4 image-container">
            <img src={building2} className="img-fluid" />
            <div className="overlay">
            <div className="text">PROJECTS NAME</div>
          </div>
          </div>
        </div>
      </div>
    </div>
      <div className="project_right"><img src={project}></img></div>
      </>
  );
}

export default Ourprojects;
