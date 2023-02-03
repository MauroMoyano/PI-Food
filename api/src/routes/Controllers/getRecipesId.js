//debo preguntar si id viene a buscar en bdd o en api
const {API_PSW, URLSPOO} = process.env
const axios = require("axios");
const {Recipe} = require('../../db')


module.exports = getRecipesId = async (id) => {
    if(typeof id === "number" ){
        let {data} = await axios.get(`${URLSPOO}?${API_PSW}&addRecipeInformation=true&number=1`)
        const {results} = data
        results.find(element => element === id)
        return {
            id: results.id,
            title: results.title,
            summary: results.summary,
            healthScore: results.healthScore,
            image: results.image,
            dishTypes: results.dishTypes,
            diets: results.diets,
            steps: results.analyzedInstructions[0].steps?.map((element, index) => {
                return `${index + 1} : ${element['step']}`
            }).join(' ')
        }
    }
    return await Recipe.findByPk(id)

}