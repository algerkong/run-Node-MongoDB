var express = require('express')
var router = require('./router')
// express 中没有内置的获取post请求的api 需要第三方包`body-parser`
var bodyParser = require('body-parser')

var app = express()

/* 开放public文件夹 */
app.use('/public/', express.static('./public/'))

//使用body-parser来post
//可以通过req.body来获取请求数据
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(router)

app.listen(80, function () {
    console.log('run', 'http://127.0.0.1:80/api/user');
})