import { ADD_FAV, REMOVE_FAV } from "./types";

//Creo mi estado inicial
const inicialState = { // [{1}, {2}, {3}]
    myFavorites: [],
}

export default function reducer(   // reducer(state, action){ switch() }

    state = inicialState, 
    {type, payload}           // ACTION, destructuro la --> action= {type, payload}
) {
switch(type){
    case ADD_FAV:
        return{
        ...state,  // por convencion siempre me copio mi state inicial
        myFavorites: [...state.myFavorites, payload]  // en payload agrego el nuevo personaje
    }
    case REMOVE_FAV:
    
    const filterFav = state.myFavorites.filter(  // el metodo filter me devuelve un nuevo array
        fav => fav.id !== Number(payload) // paso a number el id que el usuario ingrese
    )

    return{
        ...state,
        myFavorites: filterFav,
    }
    default:
        return {...state}
        
}

}

