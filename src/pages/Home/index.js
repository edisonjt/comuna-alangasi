import {
  CollectionsOutlined,
  EmailOutlined,
  FactCheckOutlined,
  VrpanoOutlined,
} from "@mui/icons-material";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const Home = () => {
  return (
    <div>
      <div
        style={{
          width: "100%",
          textAlign: "center",
          margin: "20px",
          textTransform: "uppercase",
          fontSize: "40px",
        }}
      >
        Comuna del centro del pueblo de alangasí
      </div>
      <div>
        <Carousel showArrows showThumbs={false}>
          <div>
            <img src="alangasi1.jpg" alt="Imagen 1" />
            <p className="legend">Descripción 1</p>
          </div>
          <div>
            <img src="alangasi1.jpg" alt="Imagen 2" />
            <p className="legend">Descripción 2</p>
          </div>
          <div>
            <img src="alangasi1.jpg" alt="Imagen 3" />
            <p className="legend">Descripción 3</p>
          </div>
        </Carousel>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          margin: "30px",
        }}
      >
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
            Servicios
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
            <div style={{ margin: "40px" }}>
              <EmailOutlined sx={{ fontSize: "200px" }} />
              <div
                style={{
                  width: "100%",
                  textAlign: "center",
                  margin: "10px",
                  textTransform: "uppercase",
                  fontSize: "15px",
                }}
              >
                Contactos
              </div>
            </div>
            <div style={{ margin: "40px" }}>
              <FactCheckOutlined sx={{ fontSize: "200px" }} />
              <div
                style={{
                  width: "100%",
                  textAlign: "center",
                  margin: "10px",
                  textTransform: "uppercase",
                  fontSize: "15px",
                }}
              >
                Proyectos
              </div>
            </div>

            <div style={{ margin: "40px" }}>
              <VrpanoOutlined sx={{ fontSize: "200px" }} />
              <div
                style={{
                  width: "100%",
                  textAlign: "center",
                  margin: "10px",
                  textTransform: "uppercase",
                  fontSize: "15px",
                }}
              >
                Recorrido Virtual
              </div>
            </div>
            <div style={{ margin: "40px" }}>
              <CollectionsOutlined sx={{ fontSize: "200px" }} />
              <div
                style={{
                  width: "100%",
                  textAlign: "center",
                  margin: "10px",
                  textTransform: "uppercase",
                  fontSize: "15px",
                }}
              >
                Galeria
              </div>
            </div>
          </div>
          <div>
            {/* Aquí puedes agregar el código para la sección adicional */}
          </div>
        </div>
        <div style={{ width: "50%", padding: "20px" }}>
          <div
            style={{
              width: "100%",
              textAlign: "center",
              margin: "10px",
              textTransform: "uppercase",
              fontSize: "25px",
            }}
          >
            Calendario
          </div>
          <div>
            <div>
              <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                events={[
                  { title: "Event 1", date: "2023-06-01" },
                  { title: "Event 2", date: "2023-06-05" },
                  { title: "Event 3", date: "2023-06-10" },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
