const User = require('../models/user')
const express = require('express')

const router = new express.Router()

router.post('/users/save', async (req, res) => {
    const user = new User(req.body)
    
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

router.patch('/users/me', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        updates.forEach((update) => req.user[update] = req.body[update])
        await req.user.save()
        res.send(req.user)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/users/me', async (req, res) => {
    try {
        await req.user.remove()
        sendCancelationEmail(req.user.email, req.user.name)
        res.send(req.user)
    } catch (e) {
        res.status(500).send()
    }
})

router.post('/users/login', async (req, res) => {
    try {
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