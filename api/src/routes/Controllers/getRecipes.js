const {Recipe} = require('../../db')
const {Op} = require("sequelize");
const axios = require("axios")
const {API_PSW, URLSPOO} = process.env

const getRecipes = async (name) => {
    let result = await Recipe.findAll({
        where: {
            title: {[Op.iLike]: `%${name}%`}
        }
    })

    const resultApi = await getRecipesApi(name)//throw Error("No se encontro la receta solicitada")
    if (result.length) {
        return [...result, ...resultApi]
    } else {
        if (resultApi.length) {
            return resultApi
        } else {
            throw Error(`No hay receta con ${name} incluido en su nombre`)
        }
    }
    // console.log("---------------- result api"/* + JSON.stringify(resultApi) +*/ + "result BDD" + Object.keys(resultApi[0]))

}


const getRecipesApi = async (name) => {
    let {data} = await axios.get(`${URLSPOO}?${API_PSW}&addRecipeInformation=true&number=25`)
    const {results} = data

    let obj = [];
    console.log("result en controller ", results)
    if (results.length) {
        obj = results.map((element) => {

            return {
                id: element.id,
                title: element.title,
                healthScore: element.healthScore,
                summary: element.summary,
                image: element.image,
                diet: element.diets,
            }
        })
    }
    return obj.filter((element) => element.title.toUpperCase().includes(name.toUpperCase()))
}
module.exports = getRecipes;
