import { Grid, Paper, Typography } from "@mui/material";

const AboutUs = () => {
  return (
    <Grid
      container
      m={2}
      spacing={2}
      sx={{
        display: "flex",
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
        Quienes Somos
      </Typography>
      <Grid item xs={12} sm={5}>
        <Paper style={{ padding: 20 }}>
          <Typography variant="h5" gutterBottom>
            Historia
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            ultricies orci non nunc placerat, vitae sodales lacus lobortis. Nam
            dapibus velit id urna commodo rhoncus. Donec eleifend enim ut purus
            efficitur malesuada. Suspendisse quis nisi tortor. In aliquet felis
            velit, nec aliquam sem feugiat id. Mauris interdum, tortor id
            interdum ultrices, lacus odio congue libero, sed eleifend mi lectus
            id tellus.
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={5}>
        <img
          src="alangasi1.jpg"
          alt="Imagen 1"
          style={{ width: "100%", height: "auto" }}
        />
      </Grid>
      <Grid item xs={12} sm={5}>
        <img
          src="alangasi1.jpg"
          alt="Imagen 2"
          style={{ width: "100%", height: "auto" }}
        />
      </Grid>
      <Grid item xs={12} sm={5}>
        <Paper style={{ padding: 20 }}>
          <Typography variant="h5" gutterBottom>
            Nuestra Misión
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            ultricies orci non nunc placerat, vitae sodales lacus lobortis. Nam
            dapibus velit id urna commodo rhoncus. Donec eleifend enim ut purus
            efficitur malesuada. Suspendisse quis nisi tortor. In aliquet felis
            velit, nec aliquam sem feugiat id. Mauris interdum, tortor id
            interdum ultrices, lacus odio congue libero, sed eleifend mi lectus
            id tellus.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default AboutUs;
