import { IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import { Box } from "@mui/system";
import Unsplash, { toJson } from "unsplash-js";


export const Searcher = () => {
  const [search, setSearch] = useState("");
  console.log(search)

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        marginTop: "100px"
      }}
    >
      <Box
        sx={{
          width: "30%"
        }}
      >
        <form>
          <TextField
            label="Search something"
            variant="outlined"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
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
