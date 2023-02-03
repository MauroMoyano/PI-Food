const express = require("express");
const router = express.Router();
const getHome = require('./Controllers/getHome')


router.use('/', async (req, res) => {

    try {
        const aux = await getHome()
        const auxDiet = await getDietStart()

        if (aux.length) res.status(200).json(aux, auxDiet);

    } catch (error) {
        res.status(400).json("Se te quema la olla, anda y volve!")
    }
})