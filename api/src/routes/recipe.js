const express = require('express')
const router = express.Router()
const postRecipe = require("./Controllers/postRecipe")
const getRecipes = require("./Controllers/getRecipes")

router.get('/', async (req, res) => {
    const result = await getRecipes()
    res.status(200).json(result)
})

router.post('/', async (req, res) => {
    const {id, name, summary, healtScore, step, score, image} = req.body;

    try {
        const result = await postRecipe(id, name, summary, healtScore, step, score, image)
        res.status(200).json(result)

    } catch (error) {
        res.status(400).json("La cosa salio mal!")
    }
})

module.exports = router;