const express = require('express')
const mongoose = require('mongoose')

const router = express.Router()

const User = require('./module/user')

mongoose.connect('mongodb://localhost:27017/run', { useNewUrlParser: true, useUnifiedTopology: true });



/* 
    获取user列表,
    ?id 可以 获取指定用户
    ?name 可以判断用户名
*/
router.get('/api/user', function (req, res) {
    // let a = new User({
    //     name: '杨家兴',
    //     gender: 0,
    //     birthday: Date.now(),
    //     email: 'yjx@qq.com',
    //     address: '中国山西',
    //     signature: '我好帅！！！！！！！！！！'
    // })

    // a.save().then(res => console.log(res))
    // User.remove().then(res => console.log(res))
    let id = req.query.id
    let name = req.query.name
    if (id) {
        User.findById(id).then(result => {
            res.send(result)
        })
        console.log('查询用户id', id);
    } else if (name) {
        User.find({
            name: name
        }).then(result => {
            res.send(result)
        })
        console.log('查询用户姓名', name);
    } else {
        User.find().then(result => {
            res.send(result)
        })
        console.log('查询所有用户');
    }
})

router.post('/api/user', function (req, res) {
    let user = new User(req.body)
    user.save().then(res => console.log('添加用户', res))
})




module.exports = router