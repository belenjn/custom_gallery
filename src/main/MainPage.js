import { Box, Typography } from "@mui/material";
import React from "react";
// import image from "./wallpaper.jpg";
import vector from "./vector.png";


export const MainPage = () => {
  return (
      
    <Box>
      {/* <Box
        height={200}
        sx={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></Box> */}
        <Typography variant="h1" textAlign="center" marginTop={10}>
          Welcome,
        </Typography>
        <br />
        <Typography variant="h2" textAlign="center" marginBottom="120px">
          Let's start to find your fav photos!
        </Typography>

      <Box 
      
      sx={{
        backgroundImage: `url(${vector})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "350px",
        margin: "auto",
        width: "500px",
      }}>

      </Box>
    </Box>
  );
};
