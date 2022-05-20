import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchImg } from "./imagesAPI";

/*
1. Para trabajar con el state, nunca hay que mutarlo hay metodos como push que mutan el estado inicial 
asi que hay que tener en cuenta estos factores. Sobre todo en Array y Objetos , que se guardan por referencia.

2. Cada reducers es una funcion. Que internamente cada la llamas con un dispatch
hace algo así:
function add (data){
    La estructura de action suele ser: action.type ="add" es el nombre de la funcion
    action.payload que es donde van los datos vas a mandar al store.
    return {type:"add", payload: data}
}
Que esta ultima funcion va a esta que es la que realiza los cambios finales.

export function taskReducer(state = initialState, action) {
  switch (action.type) {
    case '@tasks/taskAdded': {
      console.log(action.data)
      return [...state, action.data.task]
    }
    case '@tasks/taskToggleDone': {
      const id = action.data.id
      return state.map(task => {
        if (task.id === id) {
          task.done = !task.done
        }
        return task;
      })
    }
    default:
      return state;
  }
}

 */
/*
Ventajas del Slice
con solo poner en el apartado reducer: ya tienes la funcion de arriba.

 */

export const fetchGetImages = createAsyncThunk(
  "fetchImages",
  async (img, page) => {
    return await fetchImg(img, page);
  }
);

const setLocalStorageFunc = (value) => {
  localStorage.setItem("image", JSON.stringify(value));
};

const getLocalStorageFunc = () => {
  const getImgsFromLocal = localStorage.getItem("image");
  return getImgsFromLocal ? JSON.parse(getImgsFromLocal) : [];
};

const initialState = {
  images: [],
  favImages: getLocalStorageFunc(),
  status: "",
};

export const imagesSlice = createSlice({
  name: "image",
  initialState,
  reducers: {
    addImage: (state, action) => {
      state.favImages = [...state.favImages, action.payload];
      setLocalStorageFunc(state.favImages);
    },
    deleteImage: (state, action) => {
      state.favImages = state.favImages.filter(
        (item) => item.id !== action.payload.id
      );
      setLocalStorageFunc(state.favImages);
    },
    modifyDescriptionImage: (state, action) => {
      const statePhoto = [...state.favImages];
      const editIndex = statePhoto.findIndex(
        (photo) => photo.id === action.payload.id
      );
      const newPhoto = {
        ...statePhoto[editIndex],
        description: action.payload.descriptionPhoto,
      };
      statePhoto[editIndex] = newPhoto;
      state.favImages = statePhoto;
      setLocalStorageFunc(state.favImages);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetImages.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchGetImages.fulfilled, (state, action) => {
        state.status = "success";
        state.images = action.payload;
      })
      .addCase(fetchGetImages.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { addImage, deleteImage, modifyDescriptionImage } =
  imagesSlice.actions;

export default imagesSlice.reducer;
