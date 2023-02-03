const {Recipe} = require("../../db");
const axios = require("axios");
const {API_PSW, URLSPOO} = process.env


const getHome = async () => {
    let aux = await Recipe.findAll()

    let {data} = await axios.get(`${URLSPOO}?${API_PSW}&addRecipeInformation=true&number=1`)
    const {results} = data

    let obj = [];
    if (results.length) {
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
    return [...aux, ...obj]

}

module.exports = getHome;