import { ADD_FAV, REMOVE_FAV, FILTER, ORDER} from './types';
import axios from "axios";
// En esta linea importo mis types

// actions creators

export const addFav = (character) => {
   try {
      const endpoint = 'http://localhost:3001/rickandmorty/fav';
      return async (dispatch) => {
      const {data} = await axios.post(endpoint, character)
            return dispatch({
               type: ADD_FAV,
               payload: data
            });
         
      };
      
   } catch (error) {
      console.log(error)
   }
 };

// funcion borrar personaje, dentro tengo el obj de mi action
export const removeFav = (id) => {
   try {
      const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
      return async (dispatch) => {
         const {data} = await axios.delete(endpoint)
            return dispatch({
               type: REMOVE_FAV,
               payload: data,
         });
         
      };
      
   } catch (error) {
      console.log(error)
   }
 };


//funcion para filtrar en favoritos
export const filterCards = (gender) =>{
    return {
        type: FILTER,
        payload:gender
    }
}
//funcion para ordenar en favoritos
export const orderCards = (order) =>{
    return {
        type: ORDER,
        payload:order
    }
}

//NOTA: Recordar que estoy exportando como un objeto => {addFav, removeFav}
