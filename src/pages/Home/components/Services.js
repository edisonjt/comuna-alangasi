import { Typography } from "@mui/material";
import React from "react";
import {
  CollectionsOutlined,
  EmailOutlined,
  FactCheckOutlined,
  VrpanoOutlined,
} from "@mui/icons-material";

const Service = ({ icons }) => {
  return (
    <div style={{ width: "50%" }}>
      <div
        style={{
          width: "100%",
          textAlign: "center",
          margin: "10px",
          textTransform: "uppercase",
          fontSize: "25px",
        }}
      >
        <Typography variant="h5">Servicios</Typography>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          padding: "20px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {icons.map((icon, index) => {
          let IconComponent = null;
          let IconDescription = null;
          switch (icon) {
            case "contacts":
              IconComponent = (
                <EmailOutlined sx={{ fontSize: "200px", color: "#1976d2" }} />
              );
              IconDescription = "Contacto";
              break;
            case "projects":
              IconComponent = (
                <FactCheckOutlined
                  sx={{ fontSize: "200px", color: "#1976d2" }}
                />
              );
              IconDescription = "Proyectos";
              break;
            case "vr":
              IconComponent = (
                <VrpanoOutlined sx={{ fontSize: "200px", color: "#1976d2" }} />
              );
              IconDescription = "Recorrido Virtual";
              break;
            case "gallery":
              IconComponent = (
                <CollectionsOutlined
                  sx={{ fontSize: "200px", color: "#1976d2" }}
                />
              );
              IconDescription = "Galería";
              break;
            default:
              break;
          }
          return IconComponent ? (
            <div className="btnService">
              {IconComponent}
              <div
                style={{
                  textAlign: "center",
                  margin: "10px",
                  textTransform: "uppercase",
                  fontSize: "15px",
                }}
              >
                <Typography>{IconDescription}</Typography>
              </div>
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
};

export default Service;
