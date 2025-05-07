import React from "react";
import "./Outsource.css";

function Outsource() {
  const bpoServices = [
    {
      title: "Call Center & Help Desk Support",
      description:
        "Provide exceptional customer service and technical support with our professional call center and help desk solutions.",
    },
    {
      title: "Back-Office & Data Processing",
      description:
        "Streamline your operations with efficient back-office support, including data entry, processing, and management.",
    },
    {
      title: "Technical Support",
      description:
        "Deliver expert technical assistance to your customers with our reliable and knowledgeable support team.",
    },
  ];

  const optimizationServices = [
    {
      title: "HR & Payroll Management",
      description:
        "Simplify your HR processes with our comprehensive payroll and employee management solutions.",
    },
    {
      title: "Workflow Automation & Efficiency Audits",
      description:
        "Optimize your business operations with workflow automation and detailed efficiency audits.",
    },
  ];

  return (
    <div className="outsource-page">
      <h1>Outsource Page</h1>
      <p>Explore our professional outsourcing solutions designed to enhance your business operations.</p>

      {/* BPO Solutions Section */}
      <div className="bpo-section">
        <h2>🚀 BPO Solutions</h2>
        <div className="service-cards">
          {bpoServices.map((service, index) => (
            <div key={index} className="service-card">
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
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Outsource;