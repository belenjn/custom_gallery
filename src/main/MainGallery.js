import { Box, ListItemText, Stack } from "@mui/material";
import React from "react";


export const MainGallery = () => {
  return (
    <Box
      component="div"
      sx={{
        flexGrow: 1,
        backgroundColor: "#ede7f6",
        height: "100%",
        width: "100%",
      }}
    >
      <Stack
        spacing={4}
        sx={{
          marginLeft: "25%",
          width: "50%",
        }}
      >
        <ListItemText
          sx={{
            border: "1px solid black",
            marginTop: "50px",
            height: "200px",
          }}
        >
          Item 1
        </ListItemText>
        <ListItemText
          sx={{
            border: "1px solid black",
            height: "200px",
          }}
        >
          Item 2
        </ListItemText>
        <ListItemText
          sx={{
            border: "1px solid black",
            height: "200px",
          }}
        >
          Item 3
        </ListItemText>
      </Stack>
    </Box>
  );
};
