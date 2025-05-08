import React, { useState, useEffect } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [charCount, setCharCount] = useState(0);

  // Update character count when message changes
  useEffect(() => {
    setCharCount(formData.message.length);
  }, [formData.message]);

  const validateField = (name, value) => {
    let error = "";
    if (!value.trim()) {
      error = `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    } else if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      error = "Please enter a valid email address";
    } else if (name === "message" && value.trim().length < 10) {
      error = "Message should be at least 10 characters";
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Real-time validation for email field only (for better UX)
    if (name === "email" && errors.email) {
      setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
  };

  const validateForm = () => {
    const validationErrors = {};
    let isValid = true;

    Object.keys(formData).forEach((key) => {
      validationErrors[key] = validateField(key, formData[key]);
      if (validationErrors[key]) isValid = false;
    });

    setErrors(validationErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    } catch (error) {
      console.error("Submission error:", error);
      // You could set an error state here to show a submission error message
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setErrors({});
  };

  const contactInfo = [
    {
      icon: "fas fa-envelope",
      title: "Email",
      content: "support@consultpark.com",
      link: "mailto:support@consultpark.com"
    },
    {
      icon: "fas fa-phone",
      title: "Phone",
      content: "+1 (123) 456-7890",
      link: "tel:+11234567890"
    },
    {
      icon: "fas fa-clock",
      title: "Hours",
      content: "Monday - Friday: 9am - 5pm"
    }
  ];

  const socialLinks = [
    { icon: "fab fa-facebook-f", label: "Facebook", url: "#" },
    { icon: "fab fa-twitter", label: "Twitter", url: "#" },
    { icon: "fab fa-linkedin-in", label: "LinkedIn", url: "#" }
  ];

  return (
    <div className="contact-container">
      <div className="contact-hero">
        <h1>Get in Touch</h1>
        <p>We'd love to hear from you! Reach out for inquiries, support, or just to say hello.</p>
      </div>

      <div className="contact-content">
        <div className="contact-info-card">
          <h2>Our Information</h2>
          {contactInfo.map((info, index) => (
            <div className="info-item" key={index}>
              <i className={info.icon}></i>
              <div className="info-item-content">
                <h3>{info.title}</h3>
                {info.link ? (
                  <a href={info.link} className="info-link">{info.content}</a>
                ) : (
                  <p>{info.content}</p>
                )}
              </div>
            </div>
          ))}
          <div className="social-links">
            {socialLinks.map((social, index) => (
              <a 
                href={social.url} 
                aria-label={social.label}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
        </div>

        <div className="contact-form-container">
          {isSubmitted ? (
            <div className="success-message">
              <i className="fas fa-check-circle"></i>
              <h2>Thank You!</h2>
              <p>We've received your message and will get back to you within 24 hours.</p>
              <button 
                onClick={resetForm} 
                className="submit-button"
                aria-label="Send another message"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <>
              <h2>Send Us a Message</h2>
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.name ? "error" : formData.name ? "success" : ""}
                    placeholder="Enter your name"
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <div id="name-error" className="error-message" role="alert">
                      {errors.name}
                    </div>
                  )}
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.email ? "error" : formData.email ? "success" : ""}
                    placeholder="Enter your email"
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <div id="email-error" className="error-message" role="alert">
                      {errors.email}
                    </div>
                  )}
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.message ? "error" : formData.message ? "success" : ""}
                    placeholder="How can we help you?"
                    maxLength="500"
                    aria-describedby={errors.message ? "message-error counter" : "counter"}
                  ></textarea>
                  <div id="counter" className="counter">
                    {charCount}/500 characters
                  </div>
                  {errors.message && (
                    <div id="message-error" className="error-message" role="alert">
                      {errors.message}
                    </div>
                  )}
                </div>
                
                <button
                  type="submit"
                  className={`submit-button ${isLoading ? "loading" : ""}`}
                  disabled={isLoading}
                  aria-busy={isLoading}
                >
                  {isLoading ? (
                    <>
                      <span className="spinner" aria-hidden="true"></span>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;