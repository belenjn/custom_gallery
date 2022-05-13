import { createSlice } from '@reduxjs/toolkit';



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

const localFunc = (value) => {
    // localStorage.setItem("hola", "1") 
    localStorage.setItem("image", JSON.stringify(value) )
}

const initialState =  [];
export const imagesSlice = createSlice({
    name: "image",
    initialState: initialState,
    reducers: {// Y los datos que entran siempre son action.payload
        addImage: (state, action) => { 
          console.log(state);
          const newState = [...state, action.payload]
          localFunc(newState)
          return newState ;
        },
        
        deleteImage: (state) => {
            
        },
        modifyDescription: (state) => {

        }
    }
  
})



export const {addImage, deleteImage, modifyDescription} = imagesSlice.actions;

export default imagesSlice.reducer;