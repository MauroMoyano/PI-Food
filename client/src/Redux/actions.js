import axios from 'axios'
export const GET_HOME_CARDS = "GET_HOME_CARDS"
// const axios = require('axios')

export const getHomeCards = ()=>{
    return async function (dispatch){
        const {data} = await axios.get("http://localhost:3001/api/recipes")
        dispatch({type: GET_HOME_CARDS, payload: data})
    }
}