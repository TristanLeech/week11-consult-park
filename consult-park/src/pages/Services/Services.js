import React from "react";
import Accordion from "../../components/Accordion/Accordion";
import Virtual from "../../assets/Virtual.jpeg";
import Admin from "../../assets/Admin.jpeg";
import Sales from "../../assets/Sales.jpeg";
import Account from "../../assets/Account.jpeg";
import Media from "../../assets/Media.jpeg";


const sections = [
  { title: "Virtual Staffing Solutions", content: "We provide expert remote professionals to help your business operate efficiently and grow sustainably. Our flexible staffing solutions give you access to skilled talent without the overhead costs of traditional hiring, allowing you to scale your team based on your exact needs.",
    image:
    Virtual,
  },
  { title: "Admin Support", content: "Our virtual administrative assistants handle your day-to-day operations so you can focus on strategic priorities. From managing emails, calendars, and scheduling to organizing data, processing documents, and providing customer support, we ensure your back-office runs smoothly. We also assist with travel arrangements, meeting coordination, and basic research, serving as a reliable extension of your team." ,
    image:
    Admin,
  },
  { title: "Sales & Lead Generation", content: "Boost your revenue with our virtual sales specialists who specialize in finding and converting high-quality leads. We conduct targeted prospecting, execute cold calling and email campaigns, and maintain your CRM with updated lead information. Our team also schedules appointments, nurtures prospects, and provides sales performance reports—helping you build a stronger pipeline and close more deals efficiently." ,
    image:
    Sales,
  },
  { title: "Accounting & Bookkeeping", content: "Keep your finances accurate and compliant with our virtual accounting professionals. We handle bookkeeping, financial reporting, accounts payable/receivable, and payroll processing while ensuring your records are audit-ready. Our experts also assist with tax preparation support, bank reconciliations, and expense tracking, giving you real-time insights into your financial health." ,
    image:
    Account,
  },
  { title: "Social Media & Digital Marketing", content: "Elevate your brand’s online presence with our virtual marketing experts. We create and schedule engaging content across platforms like Facebook, Instagram, LinkedIn, and TikTok. Our services include paid advertising (Meta/Google Ads), community management, SEO optimization, and performance analytics—helping you attract more customers and grow your digital footprint strategically." ,
    image:
    Media,
  },
];

function Services() {
  return (
    
    <div className="services-page">
      <h1 style={{textAlign: "center", fontSize: "2.5rem", margin: "1rem", color: "#2c3e50", fontFamily: "Arial, sans-serif"}}>Services</h1>
      <p style={{textAlign: "center", fontSize: "1.2rem", marginBottom: "2rem", color: "#34495e", fontFamily: "Arial, sans-serif"}}>Scale efficiently with our skilled virtual professionals. <br/> Get flexible, cost-effective staffing solutions tailored to your needs—without the overhead of full-time hires. Focus on growth while we handle the rest!</p>
      <Accordion sections={sections} />
    </div>
  );
}

export default Services;