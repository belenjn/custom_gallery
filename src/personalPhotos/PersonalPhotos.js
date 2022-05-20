import { Grid, IconButton, ListItem, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box } from "@mui/system";
import { deleteImage } from "../features/imagesSlice";
// import EditIcon from "@mui/icons-material/Edit";
import InfoIcon from "@mui/icons-material/Info";
// import DownloadIcon from "@mui/icons-material/Download";
// import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import { MainModal } from "../modal/MainModal";

export const PersonalPhotos = () => {
  const [openModal, setOpenModal] = useState(false);
  const [activeImage, setActiveImage] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  const { favImages } = useSelector((state) => state.imagesStore);

  const dispatch = useDispatch();

  const handleClickModalInfo = (item, index) => {
    setOpenModal(!openModal);
    setActiveImage(item);
    setActiveImageIndex(index)
  };

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          width: "100%",
          marginTop: "100px",
        }}
      >
        <form>
          <TextField
            label="Search with your description"
            variant="outlined"
            onChange={(e) =>
              setTimeout(() => {
                // setImg(e.target.value)
              }, 1500)
            }
          />
        </form>
        <IconButton type="submit" aria-label="search">
          <SearchIcon sx={{ fill: "#4527a0", marginTop: "10px" }} />
        </IconButton>
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
          {favImages.map((item, index) => (
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
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "240px",
                  height: "100%",
                  margin: "auto",
                }}
              >
                <DeleteIcon
                  sx={{
                    backgroundColor: "#dd2c00",
                    borderRadius: "100%",
                    color: "white",
                    fontSize: "22px",
                    padding: "5px",
                    display: "block",
                    marginBottom: "300px",
                    ":hover": {
                      cursor: "pointer",
                      backgroundColor: "#bf360c",
                      fontSize: "25px",
                      transition: "0.2s ease",
                    },
                  }}
                  onClick={() => dispatch(deleteImage(item))}
                />

                <InfoIcon
                  sx={{
                    // backgroundColor: "#448aff",
                    borderRadius: "100%",
                    color: "#448aff",
                    fontSize: "35px",
                    display: "block",
                    ":hover": {
                      cursor: "pointer",
                      color: "#2962ff",
                      fontSize: "38px",
                      transition: "0.2s ease",
                    },
                  }}
                  onClick={() => handleClickModalInfo(item, index)}
                />
              </Box>
              
            </ListItem>
          ))}
        </Grid>
      </Box>
      <MainModal
                item={favImages[activeImageIndex]}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
    </>
  );
};
