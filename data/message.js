const mongoose = require('mongoose')


let Schema = mongoose.Schema

let messageSchema = new Schema({
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    list: [
        {
            content: {
                type: String,
                required: true
            },
            imgPath: String,
            time: {
                type: Date,
                default: Date.now()
            }
        }
    ],
    time: {
        type: Date,
        default: Date.now()
    }
})

const Message = mongoose.model('Message', messageSchema)



module.exports = Message