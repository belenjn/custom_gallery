import {
  Button,
  Grid,
  ListItem,
  Modal,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box } from "@mui/system";
import { deleteImage } from "../features/imagesSlice";
import EditIcon from "@mui/icons-material/Edit";
import InfoIcon from "@mui/icons-material/Info";
import DownloadIcon from '@mui/icons-material/Download';
import { saveAs } from 'file-saver';

export const PersonalPhotos = () => {
  const [modal, setModal] = useState(false);
  const [edit, setEdit] = useState(false);

  const { favImages } = useSelector((state) => state.imagesStore);

  const dispatch = useDispatch();

  const handleClickDelete = (photo) => {
    dispatch(deleteImage(photo));
  };

  const handleClickModal = () => {
    setModal(!modal);
  };

  const handleClickEditDescription = () => {
    setEdit(!edit);
    setModal(false);

  };

  const handleClickSaveDescription = () => {
    setEdit(!edit);
    setModal(false);
  };


  return (
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
        {favImages.map((item) => (
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
                onClick={() => handleClickDelete(item)}
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
                onClick={() => handleClickModal()}
              />
            </Box>

            <Modal open={modal} onClose={handleClickModal}>
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 520,
                  backgroundColor: "#fff",
                  boxShadow: 24,
                  p: 4,
                  borderRadius: "10px",
                }}
              >
               <Typography 
               variant="h3"
               sx={{
                 color: "#4527a0",
                 textDecoration: "underline"
            
               }}
               >
               Information:
               </Typography>
                <Typography sx={{ mt: 2, lineHeight: 2.5 }}>
                  <Typography
                    variant="p"
                    sx={{
                      color: "#4527a0",
                      fontWeight: 500,
                    }}
                  >
                    Width:
                  </Typography>{" "}
                  {item.width}
                  <br/>
                  <Typography
                    variant="p"
                    sx={{
                      color: "#4527a0",
                      fontWeight: 500,
                    }}
                  >
                    Height:
                  </Typography>{" "}
                  {item.height}
                  <br/>
                  <Typography
                    variant="p"
                    sx={{
                      color: "#4527a0",
                      fontWeight: 500,
                    }}
                  >
                    Likes:
                  </Typography>{" "}
                  {item.likes}
                  <br/>
                  <Typography
                    variant="p"
                    sx={{
                      color: "#4527a0",
                      fontWeight: 500,
                    }}
                  >
                    Date added:
                  </Typography>{" "}
                  {item.created_at}
                  <br/>
                  <Typography
                    variant="p"
                    sx={{
                      color: "#4527a0",
                      fontWeight: 500,
                    }}
                  >
                    Description:
                  </Typography>{" "}
                  {item.description}
                  
                  <EditIcon
                    sx={{
                      backgroundColor: "#4527a0",
                      color: "white",
                      borderRadius: "20px",
                      padding: "5px",
                      fontSize: "15px",
                      cursor: "pointer",
                      marginLeft: "10px",
                      ":hover": {
                        backgroundColor: "#b388ff",
                        transition: "0.2s ease",
                      },
                    }}
                    onClick={() => handleClickEditDescription()}
                  />
                  <br/>
                  <Typography
                    variant="p"
                    sx={{
                      color: "#4527a0",
                      fontWeight: 500,
                    }}
                  >
            
                    <br/>
                    You can download it with one click: 
                  </Typography>
                    <br/>
                    <DownloadIcon
                    sx={{
                      color: "white",
                      backgroundColor: "#4527a0",
                      borderRadius: "20px",
                      padding: "5px",
                      fontSize: "20px",
                      cursor: "pointer",
                      marginLeft: "10px",
                      ":hover": {
                        backgroundColor: "#b388ff",
                        transition: "0.2s ease",
                      },
                      
                    }}
                    onClick={() => saveAs(item.urls.full, 'image.jpg')}
                    />
                </Typography>
              </Box>
            </Modal>

            <Modal
            
              open={edit}
              onClose={handleClickEditDescription}
            >
              <Box
                sx={{

                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 520,
                  height: 400,
                  backgroundColor: "white",
                  boxShadow: 24,
                  p: 4,
                  borderRadius: "10px"
                  // border: "1px solid black",
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
                    Edit the description:{" "}
                  </Typography>
                  <TextareaAutosize
                    aria-label="minimum height"
                    minRows={5}
                  ></TextareaAutosize>
                  <Button
                    sx={{
                      backgroundColor: "#4527a0",
                      color: "white",
                      marginTop: "20px",
                      ":hover": {
                        backgroundColor: "#b388ff",
                        transition: "0.2s ease",
                      },
                    }}
                    onClick={() => handleClickSaveDescription()}
                  >
                    Click to save
                  </Button>
                </Box>
              </Box>
            </Modal>
          </ListItem>
        ))}
      </Grid>
    </Box>
  );
};
