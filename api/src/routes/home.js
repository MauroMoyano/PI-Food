const express = require("express");
const router = express.Router();
const getHome = require('./Controllers/getHome')
const getDietStart = require('./Controllers/getDietStart')
const { Diet } = require('../db')


router.get('/', async (req, res) => {

    try {
        const home = await getHome()
        let auxDiets = await Diet.findAll()

        if(!auxDiets.length) {
            auxDiets = await getDietStart(home)
        }else{
            const result =auxDiets.map((element)=> element.name)
            auxDiets = [...result]
        }
        res.status(200).json({home, auxDiets});
    } catch (error) {
        res.status(400).json("Se te quema la olla, anda y volve!")
    }
})
module.exports = router;