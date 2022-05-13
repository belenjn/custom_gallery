import {
  Grid,
  IconButton,
  ListItem,
  Pagination,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { apiKey } from "../env";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import { addImage } from "../features/imagesSlice";

const Access_Key = apiKey;

export const Searcher = () => {
  const [img, setImg] = useState("random");
  const [res, setRes] = useState([]);
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  useEffect(
    () => async () => {
      const data = await fetch(
        `https://api.unsplash.com/search/photos?query=${img}&page=${page}&per_page=24&client_id=${Access_Key}`
      );
      const dataJson = await data.json();
      const result = dataJson.results;
      setRes(result);
    },
    [img, page]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setImg("");
  };

  const handleClick = (photo) => {
    dispatch(addImage(photo));
    console.log(photo)
  };

  const handleChange = (event, value) => {
    setPage(value);
    console.log(value);
  };

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          marginTop: "100px",
        }}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            width: "60%",
          }}
        >
          <form onSubmit={handleSubmit}>
            <TextField
              label="Search something"
              variant="outlined"
              // value={img}
              onChange={(e) => setImg(e.target.value)}
            />
          </form>
          <IconButton type="submit" aria-label="search">
            <SearchIcon sx={{ fill: "#4527a0", marginTop: "10px" }} />
          </IconButton>
        </Box>
      </Box>

      <Box>
        <Grid
          container
          columns={{ xs: 3, sm: 8, md: 4 }}
          direction="row"
          justifyContent="center"
          sx={{
            marginTop: "100px",
          }}
        >
          {res.map((val) => (
            <ListItem
              key={val.id}
              sx={{
                backgroundImage: `url(${val.urls.small})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "10px",
                marginBottom: "20px",
                marginLeft: "1%",
                marginRight: "1%",
                height: "350px",
                width: "240px",
              }}
            >
              <AddIcon
                sx={{
                  backgroundColor: "#4527a0",
                  borderRadius: "100%",
                  color: "white",
                  fontSize: "22px",
                  padding: "5px",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: 0,
                  marginBottom: "300px",
                  ":hover": {
                    cursor: "pointer",
                    backgroundColor: "#b388ff",
                    fontSize: "25px",
                    transition: "0.2s ease",
                  },
                }}
                onClick={() => handleClick(val)}
              />
            </ListItem>
          ))}
        </Grid>
      </Box>
      <Pagination
        count={10}
        variant="outlined"
        color="secondary"
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
          marginBottom: "100px",
        }}
        page={page}
        onChange={handleChange}
      />
    </>
  );
};
