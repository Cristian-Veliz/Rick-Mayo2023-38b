import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./types";

//Creo mi estado inicial
const inicialState = { // [{1}, {2}, {3}]
    myFavorites: [],
    allCharactersFav: []
}

export default function reducer(   // reducer(state, action){ switch() }

    state = inicialState, 
    {type, payload}           // ACTION, destructuro la --> action= {type, payload}
) {
switch(type){
    case ADD_FAV:
        return{
        ...state,  // por convencion siempre me copio mi state inicial
        myFavorites: [...state.allCharactersFav, payload],
        allCharactersFav: [...state.allCharactersFav, payload]
        // en payload agrego el nuevo personaje
    }
    case REMOVE_FAV:
    
    const filterFav = state.myFavorites.filter(  // el metodo filter me devuelve un nuevo array
        fav => fav.id !== Number(payload) // paso a number el id que el usuario ingrese
    )

    return{
        ...state,
        myFavorites: filterFav,
    }
    
    case FILTER:
        const allcharactersFavFiltered = state.allCharactersFav.filter(character => character.gender === payload)
        return {
         ...state,
         myFavorites:
         payload === 'allCharacters'
         ?  [...state.allCharactersFav]
         : allcharactersFavFiltered
        }
    case ORDER:
        const allCharactersFavCopy = [...state.allCharactersFav]
        return{
            ...state,
            myFavorites:
            payload === 'A'
            ? allCharactersFavCopy.sort((a,b)=> a.id - b.id) // se ordena de menor a mayor
            : allCharactersFavCopy.sort((a,b) => b.id - a.id) // se ordena de mayor a menor

        }    

    default:
        return {...state}
        
}

}

