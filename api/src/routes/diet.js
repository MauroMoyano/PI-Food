const express = require('express')
const router = express.Router()
const {Diet} = require("../db")

router.get('/', async (req, res) => {
    const resultant = await Diet.findAll()
    res.status(200).json(resultant)
})

module.exports = router;