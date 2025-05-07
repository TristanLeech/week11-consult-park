import React from "react";
import "./Footer.css"; // Optional: Add styles for the footer

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Consult Park. All rights reserved.</p>
        <p>
          <strong>Email:</strong> support@consultpark.com | <strong>Phone:</strong> +1 (123) 456-7890
        </p>
      </div>
    </footer>
  );
}

export default Footer;