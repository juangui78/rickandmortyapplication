import axios from "axios";
const URL = 'http://localhost:3001/rickandmorty/fav'
export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';

export const addFav = (character) => {
    
    return function (dispatch){
        axios.post(URL, character)
            .then(({data}) => {
                
                return dispatch({
                    type: ADD_FAV,
                    payload: data
                })
            })
        
    }
}


export const removeFav = (id) => {
    return function (dispatch){
        console.log(id)
        axios.delete(`${URL}/${id}`)
            .then(({data}) => {
                return dispatch({
                    type: REMOVE_FAV,
                    payload: data
                })
            })
            .catch((error) => 'la peticion esta mala')
    }
}

export const filterCards = (gender) => {
    return {type: FILTER, payload: gender}
}

export const orderCards = (order) => {
    return {type: ORDER, payload: order}
}