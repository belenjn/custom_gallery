import {
  FormControl,
  Grid,
  InputLabel,
  ListItem,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box } from "@mui/system";
import { deleteImage } from "../features/imagesSlice";
import InfoIcon from "@mui/icons-material/Info";
import { MainModal } from "../modal/MainModal";

export const PersonalPhotos = () => {
  const { favImages } = useSelector((state) => state.imagesStore);

  const [openModal, setOpenModal] = useState(false);
  const [activeImage, setActiveImage] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(null);
  const [search, setSearch] = useState("");
  const [likesFilter, setLikesFilter] = useState(false)
 

  const dispatch = useDispatch();

  const handleClickModalInfo = (item, index) => {
    setOpenModal(!openModal);
    setActiveImage(item);
    setActiveImageIndex(index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch("");
  };


  function filterImage() {
    if (search.length) {
      const newArray = favImages.filter((photo) => {
        return JSON.stringify(photo.description)
          .toLocaleLowerCase()
          .includes(search.toLocaleLowerCase());
      });
      return newArray;
    } else {
      return favImages
    }
  }

  
  function likesPhotos() {
    let newLikes = [...favImages];
    const result = newLikes.sort((a, b) => {
      if (a.likes > b.likes) {
        return -1;
      }
      if (a.likes < b.likes) {
        return 1;
      }
      return 0;
    });
    return result;
  }

  function widthPhotos() {
    let newWidth = [...favImages];
    const result = newWidth.sort((a, b) => {
      if (a.width > b.width) {
        return -1;
      }
      if (a.width < b.width) {
        return 1;
      }
      return 0;
    });
    return result;
  }

  function heightPhotos() {
    let newHeight = [...favImages];
    const result = newHeight.sort((a, b) => {
      if (a.height > b.height) {
        return -1;
      }
      if (a.height < b.height) {
        return 1;
      }
      return 0;
    });
    return result;
  }

  const imagesFiltered = filterImage();



  const handleSearchDescription = (e) => {
    setSearch(e.currentTarget.value);
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
        <form onSubmit={handleSubmit}>
          <TextField
            label="Search by description"
            variant="outlined"
            sx={{
              xs: {
                width: 300,
              },
              lg: {
                width: 500,
              },
            }}
            onChange={handleSearchDescription}
          />
        </form>

        <FormControl
          sx={{
            xs: {
              width: 300,
            },
            lg: {
              width: 500,
            },
          }}
        >
          <InputLabel id="demo-simple-select-label"></InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="Sort"
            // onChange={handleChange}
          >
            <MenuItem onClick={() => {
              likesPhotos();
            }}>
              Likes
            </MenuItem>
            <MenuItem onClick={heightPhotos}>
              Height
            </MenuItem>
            <MenuItem nClick={widthPhotos}>
              Width
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box
        display="flex"
        autoWidth={true}
        justifyContent="center"
        alignItems="center"
        sx={{
          marginTop: "50px",
        }}
      ></Box>

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
          {imagesFiltered.map((item, index) => (
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
