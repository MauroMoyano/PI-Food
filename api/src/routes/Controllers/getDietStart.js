const {Diet} = require('../../db')

const getDietStart = async (recipes) => {

    let arrayDiets = []

    recipes.forEach((element) => {
        arrayDiets = [...arrayDiets, ...element.diets] //----------*--------- Voy guardando todos los elementos en un mismo arreglo
    })
    const result = [...new Set(arrayDiets)]; // ¡devuelvo un nuevo arreglo eliminando los elementos repetidos!
    result.forEach(async (element) => {
        await Diet.create({name: element})
    })

    return result
}
module.exports = getDietStart;