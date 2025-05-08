import React from "react";
import "./Outsource.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset, faDatabase, faTools, faUsers, faCogs } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Outsource() {
  const navigate = useNavigate();

  const bpoServices = [
    {
      icon: faHeadset,
      title: "Call Center & Help Desk Support",
      description:
        "Provide exceptional customer service and technical support with our professional call center and help desk solutions.",
    },
    {
      icon: faDatabase,
      title: "Back-Office & Data Processing",
      description:
        "Streamline your operations with efficient back-office support, including data entry, processing, and management.",
    },
    {
      icon: faTools,
      title: "Technical Support",
      description:
        "Deliver expert technical assistance to your customers with our reliable and knowledgeable support team.",
    },
  ];

  const optimizationServices = [
    {
      icon: faUsers,
      title: "HR & Payroll Management",
      description:
        "Simplify your HR processes with our comprehensive payroll and employee management solutions.",
    },
    {
      icon: faCogs,
      title: "Workflow Automation & Efficiency Audits",
      description:
        "Optimize your business operations with workflow automation and detailed efficiency audits.",
    },
  ];

  return (
    <div className="outsource-page">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>Outsource with Confidence</h1>
        <p>Discover tailored solutions to optimize your business operations and drive success.</p>
      </div>

      {/* BPO Solutions Section */}
      <div className="bpo-section">
        <h2>🚀 BPO Solutions</h2>
        <div className="service-cards">
          {bpoServices.map((service, index) => (
            <div key={index} className="service-card">
              <FontAwesomeIcon icon={service.icon} className="service-icon" />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Business Optimization Section */}
      <div className="optimization-section">
        <h2>🧠 Business Optimization</h2>
        <div className="service-cards">
          {optimizationServices.map((service, index) => (
            <div key={index} className="service-card">
              <FontAwesomeIcon icon={service.icon} className="service-icon" />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="cta-section">
        <h2>Ready to Optimize Your Business?</h2>
        <button className="cta-button" onClick={() => navigate("/contact")}>
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default Outsource;