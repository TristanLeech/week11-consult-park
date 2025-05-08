import React from "react";
import "./About.css";
import Team from "../../assets/Team.jpeg";

function About() {
  return (
    <div className="about-page">
      <div className="who-we-are">
        <div  className="teamImage" ><img id="teamImage" src={Team} width="600px" border-radius="16px"/></div>
        <div className="whoText">
          <h2>Who We Are</h2>
          <h1>Driving Innovative Success</h1>
        <p>
          Consult Park is more than just an outsourcing company — we’re your growth partner... a team of passionate individuals dedicated to providing the best
          consulting services in the industry. Our expertise spans various
          domains, and we are committed to delivering innovative solutions that
          meet our clients' needs.
        </p></div>
        
      </div>
    </div>
  );
}

export default About;