import React from "react";
import { Route, Routes } from "react-router";
import Home from "../Home";
import Galeria from "../Galeria";
import NavBar from "./Components/Navbar";
import Footer from "./Components/Footer";

function Layout() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        margin: "0px",
        padding: "0px",
      }}
    >
      <header>
        <NavBar />
      </header>
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/contacto" element={<Galeria />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;