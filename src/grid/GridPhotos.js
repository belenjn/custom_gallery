import { Box, Grid, ListItem } from "@mui/material";
import React from "react";
import image from "./img.jpg";

// * Con la configuración item xs={12} sm={4} md={3} lg={2} xl={1}, cada elemento Grid va a ocupar:
// * - 12 columnas cuando el ancho sea xs (entre 0px y 599px)      => 12/12 = 1  elemento por fila
// * -  4 columnas cuando el ancho sea sm (entre 600px y 899px)    => 12/4  = 3  elementos por fila
// * -  3 columnas cuando el ancho sea md (entre 900px y 1199px)   => 12/3  = 4  elementos por fila
// * -  2 columnas cuando el ancho sea lg (entre 1200px y 1535px)  => 12/2  = 6  elementos por fila
// * -  1 columna  cuando el ancho sea xl (más de 1536px)          => 12/1  = 12 elementos por fila

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
