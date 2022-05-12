import { autocompleteClasses, Grid, IconButton, ListItem, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import { Box } from "@mui/system";
import { apiKey } from "../env";
import AddIcon from '@mui/icons-material/Add';


const Access_Key = apiKey;

export const Searcher = () => {
  const [img, setImg] = useState("");
  const [res, setRes] = useState([]);

  const fetchRequest = async () => {
    const data = await fetch(
      `https://api.unsplash.com/search/photos?per_page=30&query=${img}&client_id=${Access_Key}`
    );
    const dataJ = await data.json();
    const result = dataJ.results;
    setRes(result);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchRequest();
    setImg("");
  };

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          marginTop: "100px",
        }}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            width: "60%",
          }}
        >
          <form onSubmit={handleSubmit}>
            <TextField
              label="Search something"
              variant="outlined"
              value={img}
              onChange={(e) => setImg(e.target.value)}
              
            />
           
          </form>
          <IconButton type="submit" aria-label="search">
              <SearchIcon style={{ fill: "#4527a0", marginTop: "10px" }} />
            </IconButton>
        </Box>
      </Box>

      
        <Box>
          <Grid
            container
            columns={{ xs: 3, sm: 8, md: 4 }}
            direction="row"
            justifyContent="center"
            sx={{
              marginTop: "100px",
            }}
          >
            {res.map((val) => (
            <ListItem
              key={val.id}
              sx={{
                backgroundImage: `url(${val.urls.small})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "10px",
                marginBottom: "20px",
                marginLeft: "1%",
                marginRight: "1%",
                height: "350px",
                width: "240px",
              }}
            ><AddIcon sx={{
              backgroundColor: "#4527a0",
              borderRadius: "100%",
              color: "white",
              fontSize: "22px",
              padding: "5px",
              display: "block",
              marginLeft: "auto",
              marginRight: 0,
              marginBottom: "300px",
              ":hover": {
                cursor: "pointer",
                backgroundColor: "#b388ff",
                fontSize: "25px",
                transition: "0.2s ease",
              }
            }}
            /></ListItem>))}
          </Grid>
        </Box>
      
    </>
  );
};
// * Con la configuración item xs={12} sm={4} md={3} lg={2} xl={1}, cada elemento Grid va a ocupar:
// * - 12 columnas cuando el ancho sea xs (entre 0px y 599px)      => 12/12 = 1  elemento por fila
// * -  4 columnas cuando el ancho sea sm (entre 600px y 899px)    => 12/4  = 3  elementos por fila
// * -  3 columnas cuando el ancho sea md (entre 900px y 1199px)   => 12/3  = 4  elementos por fila
// * -  2 columnas cuando el ancho sea lg (entre 1200px y 1535px)  => 12/2  = 6  elementos por fila
// * -  1 columna  cuando el ancho sea xl (más de 1536px)          => 12/1  = 12 elementos por fila
