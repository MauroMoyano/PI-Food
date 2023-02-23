const {Recipe} = require("../../db");
const axios = require("axios");
const {API_PSW, URLSPOO} = process.env


const getHome = async () => {
    // console.log("esta entrando a la funcion controller getHome")
    let aux = await Recipe.findAll()
    // console.log("BDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD")
    let {data} = await axios.get(`${URLSPOO}?${API_PSW}&addRecipeInformation=true&number=20`)
    const {results} = data

    let obj = [];
    if (results.length) {
        obj = results.map((element) => {
            // console.log("esta entrando a la funcion element", element)
            return {
                id: element.id,
                title: element.title,
                healthScore: element.healthScore,
                summary: element.summary.replace(/<[^>]+>/g, ''),
                image: element.image,
                diet: element.diets? element.diets: "steps not found"
            }
        })
    }
    console.log("apiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii", obj[0])
    return [...aux, ...obj]

}

module.exports = getHome;