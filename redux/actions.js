import { ADD_FAV, REMOVE_FAV } from './types';
// En esta linea importo mis types


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

//NOTA: Recordar que estoy exportando como un objeto => {addFav, removeFav}
