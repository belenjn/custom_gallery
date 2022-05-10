import { Grid, ListItem } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import image from "./img.jpg"

//xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px

export const GridPhotos = () => {
  return (
    <Box sx={{
      border: "1px solid green"
    }}>
      <Grid
        container
        spacing={{ xs: 2, md: 4 }}
        columns={{ xs: 3, sm: 8, md: 12 }}
        direction="row"
        justifyContent="space-between"
        sx={{
          border: "1px solid pink",
          marginTop: "300px"
        }}
      >
        {Array.from(Array(20)).map((_, index) => (
          <Grid item 
          xs={3} 
          sm={3} 
          md={3} 
          key={index}
          sx={{
            border: "1px solid black",
            marginTop: "24px",
            height: "400px",

          }}
          >
            <ListItem sx={{
              border: "1px solid purple",
              backgroundImage: `url(${image})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "10px",
              height: "350px",
              width: "240px"

            }}></ListItem>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
