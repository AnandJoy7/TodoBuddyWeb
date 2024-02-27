import React from "react";
import dev from "../images/dev.png";
import test from "../images/test.png";
import cloud from "../images/cloud.png";

function About() {
  return (
    <div>
      <div className="card-list">
        <a href="#" className="card-item">
          <img src={dev} alt="Card Image" />

          <span className="developer">ANAND - Web Developer</span>
          <h3>
            A Collaborates with designers and stakeholders to bring website
            designs to life.
          </h3>
          <div className="arrow">
            <i className="fas fa-arrow-right card-icon"></i>
          </div>
        </a>
        <a href="#" className="card-item">
          <img src={test} alt="Card Image" />
          <span className="designer">JEEVA - Tester</span>
          <h3>
            Performs thorough testing to identify software bugs and defects.
          </h3>
          <div className="arrow">
            <i className="fas fa-arrow-right card-icon"></i>
          </div>
        </a>
        <a href="#" className="card-item">
          <img src={cloud} alt="Card Image" />
          <span className="editor">DIWAKAR - Cloud Engineer</span>
          <h3>Designs, deploys, and manages cloud infrastructure solutions.</h3>
          <div className="arrow">
            <i className="fas fa-arrow-right card-icon"></i>
          </div>
        </a>
      </div>
    </div>
  );
}

export default About;
