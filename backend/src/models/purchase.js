const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const movieSchema = new mongoose.Schema({ name: String });
const purchaseSchema = new mongoose.Schema({

    movies: {
        type: [movieSchema],
        default: undefined,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }
 })

 const Purchase = mongoose.model('Purchase', purchaseSchema)
 module.exports = Purchase
