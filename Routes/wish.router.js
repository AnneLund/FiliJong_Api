const express = require('express')
const {WishController} = require('../Controllers/wish.controller.js')
const {verifyToken} = require('../Middleware/verifyToken.js')

const controller = new WishController()

const WishRouter = express.Router()

WishRouter.get('/wish', (req, res) => {
    controller.list(req, res)
})

WishRouter.post('/wish', (req, res) => {
    controller.create(req, res)
})

module.exports = {WishRouter}