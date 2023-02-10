const {Recipe} = require('../../db')
const {Diet} = require('../../db')

const postRecipe = async (title, summary, healthScore, step, score, image, diet) => {
    if (!summary || !title ) throw Error("La propiedad name o summary no tiene valor")

    console.log(JSON.stringify(diet), "diettttttttttttttttttt")
    const result = await Recipe.create({title, summary, healthScore, step, score, image, diet})
    console.log("entro a el manejador")
    diet.forEach(async (element) => {
            const [d, flag] = await Diet.findOrCreate({
            where: {
                name: element.toLowerCase()
            }
        })
        await result.addDiets(d)
    })
    return result

}
module.exports = postRecipe;
