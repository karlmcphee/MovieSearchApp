const Purchase = require('../models/purchase')
const express = require('express')

const router = new express.Router()
router.post('/purchase/save', async (req, res) => {
    const purchase = new Purchase(req.body)
    
        try {
            await purchase.save()
            res.status(201).send({ purchase })
        } catch (e) {
            res.status(400).send(e)
    }
})

module.exports = router