const {Recipe} = require('../../db')
const {Op} = require("sequelize");

const getRecipes = async (name) => {
    const result = await Recipe.findAll({where: {
        name: { [Op.iLike]: `%${name}%` }
        }})
    if(!result.length) throw Error("No se encontro la receta solicitada")
    return result
}

module.exports = getRecipes;