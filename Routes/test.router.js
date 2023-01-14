const express = require('express')
const {TestController, updateWish, getWishById, deleteWish, getWishes} = require('../Controllers/test.controller.js')
const {verifyToken} = require('../Middleware/verifyToken.js')

const controller = new TestController()

const TestRouter = express.Router()

TestRouter.get('/test', getWishes);

TestRouter.get('/test/:id', getWishById);


TestRouter.post('/test', (req, res) => {
    controller.create(req, res)
})


TestRouter.put('/test', updateWish)
TestRouter.put('/test/:id', updateWish)
TestRouter.delete('/test', deleteWish)

module.exports = {TestRouter}