import {
  AppBar,
  Button,
  createTheme,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";
import image from "../assets/logo.png";

export const NavBar = () => {
  const [activeSearch, setActiveSearch] = useState(false);
  const [activePhotos, setActivePhotos] = useState(false);

  const handleClickSearch = () => {
    setActivePhotos(false);
    setActiveSearch(true);
  };
  const handleClickPhotos = () => {
    setActiveSearch(false);
    setActivePhotos(true);
  };

  const theme = createTheme({
    status: {
      clicked: {
        bgcolor: "#b388ff",
        color: "#fff",
      },
      notClicked: {
        fontSize: {
          xs: "10px",
          sm: "10px",
          md: "15px",
          lg: "15px",
        },
        color: "#fff",
        marginLeft: "20px",
      },
    },
  });
  return (
    <Box sx={{ flexGrow: 1 }} position="static">
      <AppBar position="static" sx={{ bgcolor: "#4527a0", height: 70 }}>
        <Toolbar
          sx={{
            flexWrap: "wrap",
            justifyContent: { xs: "space-between", sm: "space-between" },
          }}
        >
          <Typography>
            <Box
              sx={{
                textDecoration: "none",
                fontSize: {
                  xs: "15px",
                  sm: "20px",
                  md: "30px",
                  lg: "35px",
                },
                color: "#fff",
                ":hover": {},
              }}
              href="/custom_gallery"
            >
              <Box
                alt="logo"
                src={image}
                sx={{
                  borderRadius: 10,
                  padding: 0.5,
                  height: 40,
                  width: {
                    xs: "100px",
                    sm: "150px",
                    md: "150px",
                    lg: "150px",
                  },
                  backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                 
                }}
              />
            </Box>
          </Typography>
          <Typography>
            <Button
              component={NavLink}
              onClick={handleClickSearch}
              to="/search"
              sx={activeSearch ? theme.status.clicked : theme.status.notClicked}
            >
              Search
            </Button>
            <Button
              component={NavLink}
              onClick={handleClickPhotos}
              to="/myPhotos"
              sx={activePhotos ? theme.status.clicked : theme.status.notClicked}
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
