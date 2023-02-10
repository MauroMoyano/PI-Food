import axios from 'axios'
export const GET_HOME_CARDS = "GET_HOME_CARDS"
export const GET_FOOD_ID = "GET_FOOD_ID"
export const PUT_FOOD_BY_NAME = "PUT_FOOD_BY_NAME"
export const DELETE_STATE = "DELETE_STATE"
// const axios = require('axios')

export const getHomeCards = ()=>{
    return async function (dispatch){
        console.log("la action se ejecuta")
        const {data} = await axios.get("http://localhost:3001/api/home")
        dispatch({type: GET_HOME_CARDS, payload: data})
    }
}

export const getFoodId = (id)=> {
    return async function (dispatch) {
        const {data} = await axios.get(`http://localhost:3001/api/recipe/${id}`)
        dispatch({type: GET_FOOD_ID, payload: data})
    }
}
    export const putFoodByName = (name) => {
        return async function (dispatch) {
            console.log("actions ---------", name)
            const {data} = await axios.get(`http://localhost:3001/api/recipe?name=${name}`)
            console.log("actions ---------data-----", data)
            dispatch({type: PUT_FOOD_BY_NAME, payload: data})
        }
    }

    export const postRecipe = ()=>{

    }

    export const deleteState = ()=>{
    return {type: DELETE_STATE, payload:[]}
    }
