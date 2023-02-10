//debo preguntar si id viene a buscar en bdd o en api
const {API_PSW} = process.env
const axios = require("axios");
const {Recipe} = require('../../db')


module.exports = getRecipesId = async (id) => {
    console.log("***************** dentro de getRecipeId : ", id)
    if (typeof id === "number") {

        let {data} = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?${API_PSW}`)
        const result = data
        // console.log("------------------data-----------", JSON.stringify(Object.keys(results).length))

        return ({
            id: result.id,
            title: result.title,
            summary: result.summary.replace(/<[^>]+>/g, ''),
            healthScore: result.healthScore,
            image: result.image,
            dishTypes: result.dishTypes,
            diet: result.diet,
            steps: result.analyzedInstructions[0].steps?.map((element, index) => {
                return `${index + 1} : ${element['step']}`
            }).join(' ')
        })

    } else {
        return await Recipe.findByPk(id)
    }

    // throw Error(`No se encontro el ${id} en la API`)
}