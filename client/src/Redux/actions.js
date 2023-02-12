import axios from 'axios'

export const GET_HOME_CARDS = "GET_HOME_CARDS"
export const GET_FOOD_ID = "GET_FOOD_ID"
export const PUT_FOOD_BY_NAME = "PUT_FOOD_BY_NAME"
export const DELETE_STATE = "DELETE_STATE"
export const CREATE_RECIPE = "CREATE_RECIPE"
export const ORDER_RECIPES_HEALTH = "ORDER_RECIPES_HEALTH"
export const DISH_TYPES = "DISH_TYPES"
export const ORDER_TITLE = "ORDER_TITLE"
export const CURRENT_PAGE = "CURRENT_PAGE"
// const axios = require('axios')

export const getHomeCards = () => {
    return async function (dispatch) {
        console.log("la action se ejecuta")
        const {data} = await axios.get("http://localhost:3001/api/home")
        dispatch({type: GET_HOME_CARDS, payload: data})
    }
}

export const getFoodId = (id) => {
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

export const createRecipe = (obj) => {
    return {type: CREATE_RECIPE, payload: obj}
}

export const deleteState = () => {
    return {type: DELETE_STATE, payload: []}
}

export const orderRecipes = (value) => {
    return {type: ORDER_RECIPES_HEALTH, payload: value}
}

export const dishTypes = (value) => {
    return {type: DISH_TYPES, payload: value}
}

export const OrderTitle = (value) => {
    return {type: ORDER_TITLE, payload:value}
}
 export const currentPageHandler = (value) =>{
    return {type: CURRENT_PAGE, payload: value}
 }