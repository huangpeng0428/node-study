/*
 * @Date: 2020-08-25 10:06:19
 * @LastEditors: PoloHuang
 * @LastEditTime: 2020-08-26 14:28:24
 */
module.exports = app => {
  const mongoose = require("mongoose")
  mongoose.connect('mongodb://127.0.0.1:27017/test', {
    useNewUrlParser: true
  })

  mongoose.connection.on(
    'error',
    console.error.bind(console, 'connection error:')
  )
  mongoose.connection.once('open', function () {
    // we're connected!
    console.log('we connected')
  })

  require('require-all')(__dirname + '/../models')
}