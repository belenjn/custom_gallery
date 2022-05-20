import { Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DownloadIcon from "@mui/icons-material/Download";
import { saveAs } from "file-saver";
import { Box } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import { ChildrenModal } from "./ChildrenModal";

export const MainModal = ({item, openModal, setOpenModal}) => {
  const [edit, setEdit] = useState(false);
  const [descriptionPhoto, setDescriptionPhoto] = useState("");

  const handleClickCloseModalInfo = () => {
    setOpenModal(!openModal);
  };

  const handleClickEditDescription = (oldDescription) => {
    setEdit(!edit);
    setDescriptionPhoto(oldDescription);
  };

  if(!item) {
      return null
  }

  return (
    <>
      <Modal open={openModal} onClose={handleClickCloseModalInfo}>
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
          <CloseIcon
            sx={{
              color: "#4527a0",
              marginLeft: "95%",
              cursor: "pointer",
            }}
            onClick={() => handleClickCloseModalInfo()}
          />

          <Typography
            variant="h3"
            sx={{
              color: "#4527a0",
              textDecoration: "underline",
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
            <br />
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
            <br />
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
            <br />
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
            <br />
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
              onClick={() => handleClickEditDescription(item.description, )}
            />
            <br />
            <Typography
              variant="p"
              sx={{
                color: "#4527a0",
                fontWeight: 500,
              }}
            >
              <br />
              You can download it with one click:
            </Typography>
            <br />
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
              onClick={() => saveAs(item.urls.full, "image.jpg")}
            />
          </Typography>
        </Box>
      </Modal>
      <ChildrenModal
        item={item}
        edit={edit}
        setEdit={setEdit}
        descriptionPhoto={descriptionPhoto}
        setDescriptionPhoto={setDescriptionPhoto}

      />
    </>
  );
};
