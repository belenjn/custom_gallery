import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
// import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { Box } from "@mui/system";



export const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }} position='static'>
      <AppBar position="static" sx={{ bgcolor: "#4527a0" }}>
          <Toolbar sx={{flexWrap: "wrap", justifyContent: { xs: "left", sm: "space-between"}}}>
          <Typography >
                <Button sx={{
                    textDecoration: "none",
                    fontSize:"25px",
                    color: "#fff",
                    marginRight: "80px",
                    ":hover": {
                        cursor: "pointer"
                    }
                }} href="/">CUSTOM GALLERY</Button>
            </Typography>
            <Typography>
                <Button  variant="text" sx={{
                    color: '#fff', 
                    ":hover": {
                        bgcolor: "#b388ff",
                        color: "#fff"
                    } }}>My photos</Button>
                    <Button  variant="text" sx={{
                    color: '#fff', 
                    marginLeft: "20px",
                    ":hover": {
                        bgcolor: "#b388ff",
                        color: "#fff"
                    } }}>Search</Button>
            </Typography>
          </Toolbar>
      </AppBar>
    </Box>
  );
};
