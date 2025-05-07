import React from "react";
import heroImage from "../../assets/Hero-Image.jpeg"; // Corrected path

function Home() {
  return (
    <div
      className="hero"
      style={{
        background: "linear-gradient(135deg,#4ea4dd, #2980b9)",
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
      <div className="hero-text" style={{ 
        padding: "20px", 
        maxWidth: "800px"}}>
        <h1 style={{ 
          fontSize: "2.5rem", 
          marginBottom: "1rem",
          color: "#ffffff",
          fontWeight: "600",}}>
            Powering Global {" "} <span style={{color: "#2c3e50", fontSize: "3.3rem"}}>Talent,</span> Driving Business{" "} <span style={{color: "#2c3e50", fontSize: "3.3rem"}}>Growth</span></h1>
        <h2 style={{ 
          fontSize: "1.5rem", 
          marginBottom: "1rem",
          color: "#2c3e50", 
          fontWeight: "400" }}>
          Your Strategic Outsourcing Partner for Remote Excellence
        </h2>
        <p style={{ 
          fontSize: "1.2em", 
          marginTop: "1rem", 
          color: "#ffffff",
          lineHeight: "1.6" }}>
          At Consult Park, we connect businesses with world-class remote talent, helping them scale, optimise, and thrive...
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
              fontWeight: "600"
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
            onMouseOut={(e) => e.currentTarget.style.transform = "none"}
          >
            Contact Us
          </button>
        </a>
      </div>

      <div className="hero-image"
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
  );
}

export default Home;