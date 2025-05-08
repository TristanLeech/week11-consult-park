import React from "react";
import heroImage from "../../assets/Hero-Image.jpeg"; // Corrected path
import Costs from "../../assets/Costs.jpeg";
import Efficiency from "../../assets/Efficiency.jpeg";
import Contracts from "../../assets/Contracts.jpeg";
import Communication from "../../assets/Communication.jpeg";
import Talent from "../../assets/Talent.jpeg";
import Professionals from "../../assets/Professionals.jpeg";
import Workforce from "../../assets/Workforce.jpeg";
import Approach from "../../assets/Approach.jpeg";
import Card from "../../components/FeatureCard/FeatureCard";

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="hero"
        style={{
          background: "linear-gradient(135deg, #4ea4dd, #2980b9)",
          position: "relative",
          width: "80%",
          margin: "80px auto",
          borderRadius: "16px",
          padding: "1rem",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          display: "flex",
          alignItems: "center",
          overflow: "visible", // allow the image to overflow
        }}
      >
        <div
          className="hero-text"
          style={{
            padding: "20px",
            maxWidth: "800px",
          }}
        >
          <h1
            style={{
              fontSize: "2.5rem",
              marginBottom: "1rem",
              color: "#ffffff",
              fontWeight: "600",
            }}
          >
            Powering Global{" "}
            <span style={{ color: "#2c3e50", fontSize: "3.3rem" }}>
              Talent,
            </span>{" "}
            Driving Business{" "}
            <span style={{ color: "#2c3e50", fontSize: "3.3rem" }}>Growth</span>
          </h1>
          <h2
            style={{
              fontSize: "1.5rem",
              marginBottom: "1rem",
              color: "#2c3e50",
              fontWeight: "400",
            }}
          >
            Your Strategic Outsourcing Partner for Remote Excellence
          </h2>
          <p
            style={{
              fontSize: "1.2em",
              marginTop: "1rem",
              color: "#ffffff",
              lineHeight: "1.6",
            }}
          >
            At Consult Park, we connect businesses with world-class remote
            talent, helping them scale, optimise, and thrive...
          </p>
          <a href="/contact" style={{ textDecoration: "none" }}>
            <button
              className="btn"
              style={{
                background: "#2ecc71",
                width: "200px",
                height: "60px",
                borderRadius: "6px",
                color: "#2c3e50",
                fontSize: "1.2em",
                marginTop: "25px",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
                fontWeight: "600",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "translateY(-2px)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "none")}
            >
              Contact Us
            </button>
          </a>
        </div>

        <div
          className="hero-image"
          style={{
            position: "absolute",
            right: "5vw",
            alignContent: "center",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 3,
            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
            borderRadius: "12px",
            overflow: "hidden",
            width: "450px",
            height: "580px",
            backgroundColor: "#fff",
          }}
        >
          <img
            src={heroImage}
            alt="Consultant"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
      {/* Features Section */}
      <div className="features" style={{ margin: "12vh 0" }}>
        {/* Row 1 */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginBottom: "50px",
          }}
        >
          <Card
            image={Costs}
            title="Reduce Costs"
            description="Cut operational expenses without compromising quality by leveraging our cost-effective remote talent solutions."
          />
          <Card
            image={Efficiency}
            title="Increase Efficiency"
            description="Boost productivity with streamlined workflows and highly skilled professionals tailored to your business needs."
          />
          <Card
            image={Contracts}
            title="No Rigid Contracts"
            description="Flexible engagements with no long-term commitments—scale your team up or down as needed."
          />
          <Card
            image={Communication}
            title="Fluent Communication"
            description="Seamless collaboration with English-proficient professionals who integrate smoothly into your workflow."
          />
        </div>

        {/* Row 2 */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginBottom: "30px",
          }}
        >
          <Card
            image={Talent}
            title="Certified Talent"
            description="Access pre-vetted, certified experts in their fields to ensure top-tier performance.."
          />
          <Card
            image={Professionals}
            title="Office-Based Professionals"
            description="Remote talent who work in professional environments, ensuring discipline and high productivity."
          />
          <Card
            image={Workforce}
            title="Dedicated Workforce"
            description="Exclusive team members committed to your business goals, just like in-house employees."
          />
          <Card
            image={Approach}
            title="Performance-Driven Approach"
            description="Data-backed results with regular performance tracking to ensure continuous improvement."
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
