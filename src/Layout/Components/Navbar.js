import React from "react";
import ButtonNavbar from "./ButtonNavbar";

function NavBar() {
  return (
    <div style={{ backgroundColor: "#0488D6", padding: "10px" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src="ruta-a-tu-logo.png"
          alt="Logo"
          style={{ width: "50px", marginRight: "10px" }}
        />
      </div>
      <nav>
        <ul
          style={{
            listStyleType: "none",
            margin: 0,
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <li style={{ marginLeft: "10px" }}>
            <ButtonNavbar to="/" name={"Inicio"} />
          </li>
          <li style={{ marginLeft: "10px" }}>
            <ButtonNavbar to="/about" name="Quienes Somos" />
          </li>
          <li style={{ marginLeft: "10px" }}>
            <ButtonNavbar to="/galeria" name="Galeria" />
          </li>
          <li style={{ marginLeft: "10px" }}>
            <ButtonNavbar to="/recorrido" name="Recorrido Virtual" />
          </li>
          <li style={{ marginLeft: "10px" }}>
            <ButtonNavbar to="/contacto" name="Contacto" />
          </li>
          <li style={{ marginLeft: "10px" }}>
            <ButtonNavbar to="/proyectos" name="Proyectos" />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
