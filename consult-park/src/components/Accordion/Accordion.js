import React, { useState } from "react";

const Accordion = ({ sections }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleSection = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      {sections.map((section, index) => (
        <div key={index} style={styles.section}>
          <button onClick={() => toggleSection(index)} style={styles.button}>
            {section.title}
          </button>
          {activeIndex === index && (
            <div style={styles.content}>
              <p>{section.content}</p>
              {section.image && (
                <img
                  src={section.image}
                  alt={section.title}
                  style={styles.image}
                />
              )}
            </div>
          )}
        </div>
      ))}
    </div>

  );
};

const styles = {
  section: {
    border: "1px solid #ddd",
    width: "70%",
    borderRadius: "8px",
    margin: "20px auto",
    fontFamily: "Arial, sans-serif"
  },
  button: {
    width: "100%",
    padding: "12px",
    textAlign: "left",
    border: "none",
    backgroundColor: " #8ecaf1",
    color: "rgb(36, 50, 65)",
    cursor: "pointer",
    fontSize: "1.1rem",
    fontFamily: "Arial, sans-serif"
  },
  content: {
    padding: "20px",
    margin: 0,
    textAlign: "center",
    backgroundColor: "#fff",
    fontFamily: "Arial, sans-serif"
  },
  image: {
    maxWidth: "100%",
    height: "auto",
    maxHeight: "50vh",
    marginTop: "10px",
    borderRadius: "8px",
  },
};

export default Accordion;