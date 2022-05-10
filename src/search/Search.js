import { IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import { Box } from "@mui/system";

export const Search = () => {
  return (
    <Box
      sx={{
        border: "1px solid blue",
        marginTop: "100px",
      }}
    >
      <Box
        sx={{
          border: "1px solid green",
          width: "30%",
        }}
      >
        <form>
          <TextField
            label="Search something"
            variant="outlined"
            placeholder="Search..."
            sx={{
              width: "300px",
            }}
          />
          <IconButton type="submit" aria-label="search">
            <SearchIcon style={{ fill: "#4527a0", marginTop: "10px" }} />
          </IconButton>
        </form>
      </Box>
    </Box>
  );
};
