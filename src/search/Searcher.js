import {
  Alert,
  CircularProgress,
  Grid,
  IconButton,
  ListItem,
  Modal,
  // Pagination,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import { addImage, fetchGetImages } from "../features/imagesSlice";
import { Message } from "./Message";

// import GradeIcon from "@mui/icons-material/Grade";

export const Searcher = () => {
  const [img, setImg] = useState("random");
  const [isSearching, setIsSearching] = useState(false);
  const [messageAlert, setMessageAlert] = useState(false);
  // const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  const { images } = useSelector((state) => state.imagesStore);

  useEffect(() => {
    dispatch(fetchGetImages(img));
  }, [dispatch, img]); // con paginación debo añadir page en el array.

  const handleSubmit = (e) => {
    e.preventDefault();
    setImg("");
  };

  const handleClick = (photo) => {
    dispatch(addImage(photo));
    setMessageAlert(true);
  };

  const handleClose = () => {
    setMessageAlert(false);
  };

  // const handleChange = (event, value) => {
  //   setPage(value);
  //   console.log(value);
  // };

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
              onChange={(e) =>
                setTimeout(() => {
                  setImg(e.target.value);
                }, 1500)
              }
            />
          </form>
          <IconButton type="submit" aria-label="search">
            <SearchIcon sx={{ fill: "#4527a0", marginTop: "10px" }} />
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
          {isSearching && <CircularProgress color="secondary" />}

          {images.map((item) => (
            <ListItem
              key={item.id}
              sx={{
                backgroundImage: `url(${item.urls.small})`,
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
            >
              <AddIcon
                sx={{
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
                  },
                }}
                onClick={() => handleClick(item)}
              />

              {messageAlert && (
                <Modal open={handleClick} onClose={handleClose}>
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 300,
                    height: 100,
                    backgroundColor: "white",
                    boxShadow: 24,
                    p: 4,
                    borderRadius: "10px",
                  }}
                >
                
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      variant="h5"
                      textAlign="center"
                      color="#4527a0"
                      sx={{
                        marginBottom: "60px",
                      }}
                    >
                      Saved image - Check it out!{" "}
                    </Typography>
                
                  
                  </Box>
                </Box>
              </Modal>
               
              )}

              {/* {show && (
                <GradeIcon
                  sx={{
                    backgroundColor: "transparent",
                    borderRadius: "100%",
                    color: "#ffeb3b",
                    fontSize: "30px",
                    display: "block",
                    padding: "3px",
                    marginLeft: "auto",
                    marginRight: 0,
                    marginBottom: "300px",
                    ":hover": {
                      cursor: "pointer",
                    },
                  }}
                />
              )} */}
            </ListItem>
          ))}
        </Grid>
      </Box>
      {/* <Pagination
        count={10}
        variant="outlined"
        color="secondary"
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
          marginBottom: "100px",
        }}
        page={page}
        onChange={handleChange}
        //La paginación no funciona, probar otro componente o hacerla a mano
      /> */}
    </>
  );
};
