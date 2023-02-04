const {Recipe} = require('../../db')
const {Op} = require("sequelize");
const axios = require("axios")
const {API_PSW, URLSPOO} = process.env

const getRecipes = async (name) => {
    let result = await Recipe.findAll({
        where: {
            name: {[Op.iLike]: `%${name}%`}
        }
    })
    const resultApi = await getRecipesApi(name)//throw Error("No se encontro la receta solicitada")
    if(result.length){
        return [...result, ...resultApi]
    }else{
        if(resultApi.length){
            return resultApi
        }else{
            throw Error(`No hay receta con ${name} incluido en su nombre`)
        }
    }
    // console.log("---------------- result api"/* + JSON.stringify(resultApi) +*/ + "result BDD" + Object.keys(resultApi[0]))
}


const getRecipesApi = async (name) => {
    let {data} = await axios.get(`${URLSPOO}?${API_PSW}&addRecipeInformation=true&number=5`)
    const {results} = data

    console.log("---------------------------getRecipes--------------------" + JSON.stringify(results))
    let obj = [];
   if(results.length) {
       obj = results.map((element) => {

      // console.log("keyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyys" + Object.keys(element))

            return {
                id: element.id,
                title: element.title,
                // summary: element.summary,
                healthScore: element.healthScore,
                image: element.image,
                // dishTypes: element.dishTypes,
                diets: element.diets,
                // steps: element.analyzedInstructions[0].steps?.map((element, index)=>{
                //    return `${index + 1} : ${element['step'] }`
                // }).join(' ')
            }
    })
   }
   return obj.filter((element)=> element.title.toUpperCase().includes(name.toUpperCase()))
}
module.exports = getRecipes;


const respuesta = []
