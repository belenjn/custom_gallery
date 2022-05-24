import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }} position="static">
      <AppBar position="static" sx={{ bgcolor: "#4527a0" }}>
        <Toolbar
          sx={{
            flexWrap: "wrap",
            justifyContent: { xs: "space-between", sm: "space-between" },
          }}
        >
          <Typography>
            <Button
              sx={{
                textDecoration: "none",
                fontSize: {
                  xs: "15px",
                  sm: "20px",
                  md: "30px",
                  lg: "35px",
                },
                color: "#fff",
                ":hover": {
                },
              }}
              href="/custom_gallery"
            >
              CUSTOM GALLERY
            </Button>
          </Typography>
          <Typography>
            <Button
              component={NavLink}
              to="/search"
              sx={{
                fontSize: {
                  xs: "10px",
                  sm: "10px",
                  md: "15px",
                  lg: "15px",
                },
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
            <Button
              component={NavLink}
              to="/myPhotos"
              sx={{
                fontSize: {
                  xs: "10px",
                  sm: "10px",
                  md: "15px",
                  lg: "15px",
                },
                color: "#fff",
                ":hover": {
                  bgcolor: "#b388ff",
                  color: "#fff",
                },
              }}
              variant="text"
            >
              My photos
            </Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
