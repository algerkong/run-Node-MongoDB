const mongoose = require('mongoose')

let Schema = mongoose.Schema

let userSchema = new Schema({
    account: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    gender: {
        type: Number,
        enum: [0, 1],
        default: 0
    },
    birthday: {
        type: Date,
        required: true
    },
    email: {
        type: String
    },
    address: {
        type: String
    },
    signature: {
        type: String
    },
    creationTime: {
        type: Date,
        default: Date.now()
    },
    friends: {
        count: Number,
        list: [
            {
                id: String,
                name: String,
                imgPath: String
            }
        ]
    },
    focus: {
        count: Number,
        list: [
            {
                id: String,
                name: String,
                imgPath: String
            }
        ]
    },
    dynamic: [
        {
            id: String
        }
    ]

})

const User = mongoose.model('User', userSchema)



module.exports = User