const {Recipe} = require('../../db')

const getRecipes = async () => {
    return await Recipe.findAll()
}

module.exports = getRecipes;