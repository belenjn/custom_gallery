import { ListItem } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react';
import { useSelector } from "react-redux";


export const PersonalPhotos = () => {

  const images = useSelector(store => store.image)
  
  return (
    <div>
      {images.map(item => (
            <ListItem
              key={item.id}
              sx={{
                backgroundImage: `url(${item.urls.small})`,
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
              <DeleteIcon
                sx={{
                  backgroundColor: "#dd2c00",
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
                    backgroundColor: "#ff9e80",
                    fontSize: "25px",
                    transition: "0.2s ease",
                  },
                }}
              />
            </ListItem>
          ))}
    </div>
  )
}
