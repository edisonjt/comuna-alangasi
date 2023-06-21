import { Facebook, Instagram, Twitter } from "@mui/icons-material";
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
        <Facebook href="https://facebook.com" />
        <Twitter href="https://twitter.com" />
        <Instagram href="https://instagram.com" />
      </div>
      <p style={{ margin: "5px 0" }}>COPYRIGHT © ALL RIGHTS RESERVED.</p>
    </div>
  );
}

export default Footer;
