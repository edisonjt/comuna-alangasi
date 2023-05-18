import React from "react";
import { Link } from "react-router-dom";

function ButtonNavbar({ name, to }) {
  return (
    <Link
      to={to}
      style={{
        color: "white",
        fontSize: "20px",
        textDecoration: "none",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginRight: "15px",
      }}
    >
      {name}
    </Link>
  );
}

export default ButtonNavbar;
