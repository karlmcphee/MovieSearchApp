const User = require('../models/user')
const express = require('express')

const router = new express.Router()

router.post('/users/save', async (req, res) => {
    console.log("AAAAAAAAAAaa")
    console.log(req.body)
    const user = new User(req.body)
    console.log(user.email)
    
        try {
            await user.save()
            res.status(201).send({ user })
        } catch (e) {
            res.status(400).send(e)
    }
})


router.get('/users', async (req, res) => {
    try {
    const users = await User.find({})
    res.send(users)
    } catch(e) {
        res.status(500).send()
    }
    // User.find({}).then((users) => {
    //     res.send(users)
    // }).catch((e) => {
    //     res.status(500).send()

    // })
})

router.post('/users/login', async (req, res) => {
    try {
        console.log('asdf')
        console.log(req.body)
        const user = await User.findByCredentials(req.body.user, req.body.password)
        res.send(user)
    } catch(e) {
        console.log(e)
        res.status(400).send()
    }
 //   try {
 //   const user = await User.findOne(req.body.name)

  //  console.log(req.body.name)
  //  res.send(user)
 //   } catch (e) {
  //      res.status(400).send()
  //  }
})

module.exports = router