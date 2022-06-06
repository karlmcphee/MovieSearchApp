const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }

    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        trim: true
    }

})

userSchema.statics.findByCredentials = async (name, password) => {

    const user = await User.findOne({ name })

    if (!user) {
        throw new Error('This username has not been registered')
    }
    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
        throw new Error('Incorrect password'+password+' '+user.password)
    }

    return user
}

userSchema.pre('save', async function (next) {
    const user = this

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }

    next()
})


const User = mongoose.model('User', userSchema)


/*const me = new User({
    name: 'default',
    email: 'default@default.com',
    password: 'default111'
})

me.save().then(() => {
    console.log(me)

}).catch((error) => {
    console.log('error!', error)
})
 */
module.exports = User