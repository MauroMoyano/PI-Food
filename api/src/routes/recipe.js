const express = require('express')
const router = express.Router()
const postRecipe = require("./Controllers/postRecipe")

router.get('/', (req, res)=>{
    res.status(200).json("Vamooo nachoo")
})

router.post('/', (req, res)=>{
    const {name, summery, healtScore, step, score, image} = req.body;
    try{

    }catch (error){
        res.status(400).json("La cosa salio mal!")
    }
})

module.exports = router;