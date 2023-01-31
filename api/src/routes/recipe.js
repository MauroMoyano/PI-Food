const express = require('express')
const router = express.Router()
const postRecipe = require("./Controllers/postRecipe")
const getRecipes = require("./Controllers/getRecipes")
const getRecipesId = require("./Controllers/getRecipesId")

router.get('/', async (req, res) => {
    try {
        const {name} = req.query
        const result = await getRecipes(name)
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
})

router.get('/:idReceta', async (req, res) => {
    try {
        const {idReceta} = req.params
        const result = await getRecipesId(idReceta)
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
})

router.post('/', async (req, res) => {
    const {id, name, summary, healthScore, step, score, image} = req.body;

    try {
        const result = await postRecipe(id, name, summary, healthScore, step, score, image)
        res.status(200).json(result)

    } catch (error) {
        res.status(400).json("La cosa salio mal!")
    }
})

module.exports = router;