/*
 * @Date: 2020-08-27 14:39:36
 * @LastEditors: PoloHuang
 * @LastEditTime: 2020-08-27 15:29:32
 */
const express = require('express')

const app = express()
console.log(app.listen)

// app.set('secret')

app.use(require('cors')())

app.set('secret', 'i2u34y12oi3u4y8')

app.use(require('cors')())
app.use(express.json())
app.use('/admin', express.static(__dirname + '/admin'))

app.listen(3002, () => {
  console.log('http://localhost:3002')
})