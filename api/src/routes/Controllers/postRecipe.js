const {Recipe} = require('../../db')
const {Diet} = require('../../db')

const postRecipe = async (title, summary, healthScore, step, score, image, diet) => {
    if (!summary || !title ) throw Error("La propiedad name o summary no tiene valor")

    console.log(JSON.stringify(diet), "diettttttttttttttttttt")
    image = 'https://cdn.vectorstock.com/i/1000x1000/66/77/new-recipe-label-or-sticker-vector-32356677.webp'
    const result = await Recipe.create({title, summary, healthScore, step, score, image, diet})

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
