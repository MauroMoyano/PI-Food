const express = require("express");
const router = express.Router();
const getHome = require('./Controllers/getHome')
const getDietStart = require('./Controllers/getDietStart')


router.get('/', async (req, res) => {

    try {
        const aux = await getHome()
        const auxDiets = await getDietStart(aux)
        console.log("Ruta home dietas :", auxDiets)
        if (aux.length && auxDiets.length) res.status(200).json({aux, auxDiets});

    } catch (error) {
        res.status(400).json("Se te quema la olla, anda y volve!")
    }
})
module.exports = router;