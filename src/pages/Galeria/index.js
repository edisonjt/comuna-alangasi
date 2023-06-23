import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ActionAreaCard from "./components/CardGallery";

const Galeria = () => {
  return (
    <Box
      m={5}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          backgroundImage: "url('alangasi1.jpg')",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        variant="h4"
        m={5}
        height={"100px"}
      >
        Galeria
      </Typography>
      <Box
        sx={{
          backgroundColor: "white",
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActionAreaCard />
        <ActionAreaCard />
        <ActionAreaCard />
        <ActionAreaCard />
        <ActionAreaCard />
        <ActionAreaCard />
        <ActionAreaCard />
        <ActionAreaCard />
        <ActionAreaCard />
        <ActionAreaCard />
      </Box>
    </Box>
  );
};

export default Galeria;
