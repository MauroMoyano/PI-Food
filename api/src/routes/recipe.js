const express = require('express')
const router = express.Router()
const postRecipe = require("./Controllers/postRecipe")
const getRecipes = require("./Controllers/getRecipes")
const getRecipesId = require("./Controllers/getRecipesId")

// ------------------------- Ruta GET name por query ---------------------------

router.get('/', async (req, res) => {
    try {
        const {name} = req.query
        console.log("back name : ", name)
        const result = await getRecipes(name)
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
})

// -------------------------- Ruta GET por id --------------------------------------
router.get('/:idReceta', async (req, res) => {
    try {
        let result = {};
        const {idReceta} = req.params
        if(idReceta.includes("-")) result = await getRecipesId(idReceta)
        else result = await getRecipesId(parseInt(idReceta))
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
})

// --------------------------- Ruta POST mediante formulario ----------------------------
router.post('/', async (req, res) => {

    const {title, summary, healthScore, step, score, image, diet} = req.body;
console.log("esta entrando a la ruta", diet)
    try {
        const result = await postRecipe(title, summary, healthScore, step, score, image, diet)
        res.status(201).json(result)

    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

module.exports = router;