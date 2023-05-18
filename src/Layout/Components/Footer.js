import React from "react";

function Footer() {
  return (
    <div
      style={{
        backgroundColor: "#0488D6",
        color: "white",
        padding: "10px",
        textAlign: "center",
      }}
    >
      <div>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i
            className="fab fa-facebook-square"
            style={{ fontSize: "24px", marginRight: "10px" }}
          ></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i
            className="fab fa-twitter-square"
            style={{ fontSize: "24px", marginRight: "10px" }}
          ></i>
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i
            className="fab fa-instagram-square"
            style={{ fontSize: "24px", marginRight: "10px" }}
          ></i>
        </a>
      </div>
      <p style={{ margin: "5px 0" }}>COPYRIGHT © ALL RIGHTS RESERVED.</p>
    </div>
  );
}

export default Footer;
