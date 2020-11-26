const mongoose = require('mongoose')


let Schema = mongoose.Schema

let dynamicSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    imgList: {
        type: Array
    },
    goods: {
        count: {
            type: Number,
            default: 0
        },
        list: {
            type: String
        }
    },
    stars: {
        count: {
            type: Number,
            default: 0
        },
        list: {
            type: String
        }
    },
    chats: {
        count: {
            type: Number,
            default: 0
        },
        list: [
            {
                user_id: {
                    type: String
                },
                content: {
                    type: String
                },
                time: {
                    type: Date,
                    default: Date.now()
                }
            }
        ]
    },
    time: {
        type: Date,
        default: Date.now()
    }
})

const Dynamic = mongoose.model('Dynamic', dynamicSchema)



module.exports = Dynamic