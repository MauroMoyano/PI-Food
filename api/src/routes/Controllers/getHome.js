const {Recipe} = require("../../db");
const axios = require("axios");
const {API_PSW, URLSPOO} = process.env


const getHome = async () => {
    let aux = await Recipe.findAll()

    let {data} = await axios.get(`${URLSPOO}?${API_PSW}&addRecipeInformation=true&number=5`)
    const {results} = data

    let obj = [];
    if (results.length) {
        obj = results.map((element) => {

            return {
                id: element.id,
                title: element.title,
                healthScore: element.healthScore,
                summary: element.summary.replace(/<[^>]+>/g, ''),
                image: element.image,
                diets: element.diets
            }
        })
    }
    return [...aux, ...obj]

}

module.exports = getHome;