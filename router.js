const User = require('./data/user')
const express = require('express')
const mongoose = require('mongoose')

const router = express.Router()

mongoose.connect('mongodb://localhost:27017/run', { useNewUrlParser: true, useUnifiedTopology: true });


router.get('/api/user', function (req, res) {
    let a = new User({
        name: '杨家兴',
        gender: 0,
        birthday: Date.now(),
        email: 'yjx@qq.com',
        address: '中国山西',
        signature: '我好帅！！！！！！！！！！'
    })

    a.save().then(res => console.log(res))
    // User.remove().then(res => console.log(res))
    User.find().then(result => {
        res.send(result)
    })
})

module.exports = router