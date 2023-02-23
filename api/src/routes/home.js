const express = require("express");
const router = express.Router();
const getHome = require('./Controllers/getHome')
const getDietStart = require('./Controllers/getDietStart')
const { Diet } = require('../db')


router.get('/', async (req, res) => {

    try {
        // console.log("esta entrando en la ruta")
        const home = await getHome()
        let auxDiets = await Diet.findAll()
// console.log("bdd --------------- ", auxDiets)
        if(!auxDiets.length) {
            auxDiets = await getDietStart(home)
        }else{
            const result =auxDiets.map((element)=> element.name)
            auxDiets = [...result]
        }
        res.status(200).json({home, auxDiets});
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})
module.exports = router;