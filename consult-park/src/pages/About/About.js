import React from "react";
import "./About.css";
import Team from "../../assets/Team.jpeg";
import Vision from "../../assets/missionVision.jpeg";
import Excellence from "../../assets/lightbulb.png";
import Integrity from "../../assets/handshake.png";
import Innovation from "../../assets/rocket.png";
import GlobalReach from "../../assets/globe.png";
import Card from "../../components/FeatureCard/FeatureCard";

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

      <div className="gradient">
        <div className="missVis">
        <div className="visText">
          <h2>Mission and Vision</h2>
          <h1>Getting you where you need to be</h1>
        <p><b>
          We use cutting edge techniques to provide the best consulting services in the industry. Our mission is to empower businesses with innovative solutions that drive growth and success. We envision a future where our clients thrive in a competitive landscape, leveraging our expertise to achieve their goals.
        </b></p></div>
        <div  className="teamImage" ><img id="teamImage" src={Vision} width="600px" border-radius="16px"/></div>
      </div>

      <div className="values">
      <div className="valText">
        <h2>Our Values</h2>
        <h1>Integrity, Innovation, Excellence</h1>
        <p>
          At Consult Park, we believe in the power of integrity, innovation,
          and excellence. These values guide our actions and decisions, ensuring
          that we always put our clients first and deliver the highest quality
          services.
        </p>
      </div>
        
      
        <div className="valueGrid">
            <Card
              image={Excellence}
              title="Excellence"
              description="Cut operational expenses without compromising quality by leveraging our cost-effective remote talent solutions."
            />
            <Card
              image={Integrity}
              title="Integrity"
              description="Boost productivity with streamlined workflows and highly skilled professionals tailored to your business needs."
            />
            <Card
              image={Innovation}
              title="Innovation"
              description="Flexible engagements with no long-term commitments—scale your team up or down as needed."
            />
            <Card
              image={GlobalReach}
              title="Global Reach"
              description="Seamless collaboration with English-proficient professionals who integrate smoothly into your workflow."
            />
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default About;