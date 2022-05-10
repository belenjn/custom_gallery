import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
// import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }} position="static">
      <AppBar position="static" sx={{ bgcolor: "#4527a0" }}>
        <Toolbar
          sx={{
            flexWrap: "wrap",
            justifyContent: { xs: "left", sm: "space-between" },
          }}
        >
          <Typography>
            <Button
              sx={{
                textDecoration: "none",
                fontSize: "25px",
                color: "#fff",
                marginRight: "80px",
                ":hover": {
                  cursor: "pointer",
                },
              }}
              href="/"
            >
              CUSTOM GALLERY
            </Button>
          </Typography>
          <Typography>
            <Button
              component={NavLink}
              to="/myPhotos"
              sx={{
                color: "#fff",
                marginLeft: "20px",
                ":hover": {
                  bgcolor: "#b388ff",
                  color: "#fff",
                },
              }}
              variant="text"
            >
              My photos
            </Button>
            <Button
              component={NavLink}
              to="/search"
              sx={{
                color: "#fff",
                marginLeft: "20px",
                ":hover": {
                  bgcolor: "#b388ff",
                  color: "#fff",
                },
              }}
            >
              Search
            </Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
