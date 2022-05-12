import { createSlice } from '@reduxjs/toolkit';


const imagesInitialState = {
    images : {
    value: []
    }
}

// const favImagesInitialState = {
//     imagesFav: {
//         value: []
//     }
// }


export const imagesSlice = createSlice({
    name: "images[search]",
    imagesInitialState,
    reducers: {

    }
})