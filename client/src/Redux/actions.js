import axios from 'axios'
export const GET_HOME_CARDS = "GET_HOME_CARDS"
export const GET_FOOD_ID = "GET_FOOD_ID"
// const axios = require('axios')

export const getHomeCards = ()=>{
    return async function (dispatch){
        const {data} = await axios.get("http://localhost:3001/api/recipes")
        dispatch({type: GET_HOME_CARDS, payload: data})
    }
}

export const getFoodId = (id)=>{
    return async function (dispatch){
        const {data} = await axios.get(`http://localhost:3001/api/recipe/${id}`)
        dispatch({type: GET_FOOD_ID, payload: data})
    }
}