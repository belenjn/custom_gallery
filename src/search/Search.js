import { Box, IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

export const Search = () => {
  return (
    <Box
      sx={{
        marginTop: "30px",
        marginLeft: "30px",
      }}
    >
      <form>
        <TextField
          id="search-bar"
          className="text"
          label="Search something"
          variant="outlined"
          placeholder="Search..."
          sx={{
            width: "300px",

          }}
        />
        <IconButton type="submit" aria-label="search">
          <SearchIcon style={{ fill: "#4527a0", marginTop: "10px"}} />
        </IconButton>
      </form>
    </Box>
  );
};
