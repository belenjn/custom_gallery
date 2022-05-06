import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import './NavBar.css'

export const NavBar = () => {
  return (
    <div>
      <AppBar position="static" sx={{bgcolor: '#4527a0'}}>
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <PhotoCameraIcon />
          </IconButton>
          <Typography component="div" sx={{ mr: 8 }} >
            <h4>Custom gallery</h4>
          </Typography>
          <Typography
            color="inherit"
            component="div"
            align="right"
            sx={{ mr: 2, mt: 0.5 }}
          >
            <h5>Search</h5>
          </Typography>
          <Typography color="inherit" component="div" sx={{ mt: 0.5 }}>
            <h5>My photos</h5>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
