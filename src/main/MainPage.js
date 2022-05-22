import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import vector from "./vector.png";

export const MainPage = () => {
  return (
    <Box>
      <Typography
        textAlign="center"
        marginTop={10}
        sx={{
          fontSize: {
            xs: "40px",
            sm: "50px",
            md: "60px",
            lg: "70px",
            xl: "90px",
          },
          fontWeight: { xs: 400, sm: 300, md: 200, lg: 100, xl: 100 },
        }}
      >
        Welcome,
      </Typography>
      <br />
      <Typography
        textAlign="center"
        marginBottom="50px"
        sx={{
          fontSize: {
            xs: "20px",
            sm: "30px",
            md: "40px",
            lg: "50px",
            xl: "60px",
          },
          fontWeight: { xs: 400, sm: 300, md: 200, lg: 100, xl: 100 },
        }}
      >
        Let's start to find your fav photos!
      </Typography>

      <Grid
        container
        sx={{
          justifyContent: "center",
          marginBottom: "30px",
        }}
      >
        <Button
          sx={{
            bgcolor: "#4527a0",
            ":hover": {
              cursor: "pointer",
              bgcolor: "#b388ff",
            },
          }}
          size="large"
          variant="contained"
          component={NavLink}
          to="/search"
        >
          Click here to start
        </Button>
      </Grid>

      <Box
        sx={{
          backgroundImage: `url(${vector})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: {
            xs: "350px",
            sm: "350px",
            md: "350px",
            lg: "350px",
            xl: "350px",
          },
          margin: "auto",
          width: {
            xs: "300px",
            sm: "500px",
            md: "500px",
            lg: "500px",
            xl: "500px",
          },
        }}
      ></Box>
    </Box>
  );
};
