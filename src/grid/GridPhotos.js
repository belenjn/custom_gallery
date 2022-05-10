import { Box, Grid, ListItem } from "@mui/material";
import React from "react";
import image from "./img.jpg";

//xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px

export const GridPhotos = () => {
  return (
    <Box>
      <Grid
        container
        columns={{ xs: 3, sm: 8, md: 12 }}
        direction="row"
        justifyContent="center"
        sx={{
          border: "1px solid pink",
          marginTop: "100px",
        }}
      >
        {Array.from(Array(20)).map((_, index) => (
          <ListItem 
            key={index}
            sx={{
              backgroundImage: `url(${image})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "10px",
              marginBottom: "20px",
              marginLeft: "1%",
              marginRight: "1%",
              height: "350px",
              width: "240px"
            }}
          ></ListItem>
        ))}
      </Grid>
    </Box>
  );
};
