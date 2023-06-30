import { ADD_FAV, REMOVE_FAV, FILTER, ORDER} from './types';
// En esta linea importo mis types

// actions creators
// funcion agregar personaje, dentro tengo el obj de mi action
export function addFav(character){  // {name: -, gender: -} 
    return {
        type: ADD_FAV,
        payload: character,
    }
}

// funcion borrar personaje, dentro tengo el obj de mi action
export function removeFav(id){
    return {
        type: REMOVE_FAV,
        payload: id,
    }
}
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
