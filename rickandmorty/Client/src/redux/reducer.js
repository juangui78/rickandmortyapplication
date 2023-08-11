import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions";

const initialState = {
    myFavorites: [],
    allCharacters: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        // case ADD_FAV: 
        //     return {...state.allCharacters, myFavorites: [...state.myFavorites, action.payload],
        //         allCharacters: [...state.myFavorites, action.payload]
        //     }
        case ADD_FAV: 
            return {...state, myFavorites: action.payload}
        
        case REMOVE_FAV:
            return {...state, myFavorites: action.payload}
        
        // case REMOVE_FAV:
        //     return {...state, myFavorites: [...state.myFavorites.filter((character) => {
        //         return character.id !== action.payload
        //     })]}

        case FILTER: 
            return {...state, myFavorites: [...state.allCharacters.filter((character) => {
                return character.gender === action.payload;
            })]}

        case ORDER: 
            if (action.payload === 'A') {
                return {...state, myFavorites: [...state.allCharacters.sort((a ,b) => a.id - b.id)]}
                }
            else if (action.payload === 'D') {
                return {...state, myFavorites: [...state.allCharacters.sort((a ,b) => b.id - a.id)]}
                }
            
// eslint-disable-next-line
        default: return {...state}
    }
}

export default rootReducer;