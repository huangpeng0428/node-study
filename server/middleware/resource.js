/*
 * @Date: 2020-09-01 16:48:16
 * @LastEditors: PoloHuang
 * @LastEditTime: 2020-09-01 17:10:27
 */
module.exports = options => {
  return async (req, res, next) => {
    const modelName = require('inflection').classify(req.params.resource)
    console.log('modelName', modelName)
    req.Model = require(`../models/${modelName}`) 
    next()
  }
}