import React from "react";

const Card = ({ image, title, description }) => {
  return (
    <div style={styles.card}>
      <img src={image} alt={title} style={styles.image} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const styles = {
  card: {
    background: "white",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    width: "350px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    justifyContent: "center",
    fontSize: "1.2em",
  },
  image: {
    width: "100%",
    height: "350px",
    borderRadius: "8px",
    objectFit: "cover",
  },
    title: {
        fontSize: "1.5em",
        margin: "16px 0",
        color: "#333",
    },
};

export default Card;