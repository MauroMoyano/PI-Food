const {Recipe} = require('../../db')

const postRecipe = async (id, name, summary, healtScore, step, score, image) => {

    if (!summary || !name) throw Error("La propiedad name o summary no tiene valor")

// console.log(JSON.stringify(Recipe))

    return await Recipe.create({id, name, summary, healtScore, step, score, image})
}
module.exports = postRecipe;