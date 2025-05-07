import React from "react";

function Home() {
  return (
    <div
      className="hero"
      style={{
        background: "linear-gradient(135deg, #3498db, #2980b9)",
        width: "90%",
        margin: "10px auto",
        borderRadius: "10px",
        color: "#ffffff",
        padding: "2rem",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="hero-text" style={{ 
        padding: "20px", 
        maxWidth: "800px"}}>
        <h1 style={{ 
          fontSize: "2.5rem", 
          marginBottom: "1rem" }}>Powering Global Talent, Driving Business Growth</h1>
        <h2 style={{ 
          fontSize: "1.5rem", 
          marginBottom: "1rem", 
          fontWeight: "normal" }}>
          🔹 Your Strategic Outsourcing Partner for Remote Excellence 🔹
        </h2>
        <p style={{ 
          fontSize: "1.2em", 
          marginTop: "1rem", 
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
              color: "#ffffff",
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
    </div>
  );
}

export default Home;