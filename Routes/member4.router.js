const express = require('express')
const {Member4Controller, updateWish, getWishById, deleteWish, getWishes} = require('../Controllers/Member4.controller.js')
const {verifyToken} = require('../Middleware/verifyToken.js')

const controller = new Member4Controller()

const Member4Router = express.Router()

Member4Router.get('/member4', getWishes);

Member4Router.get('/member4/:id', getWishById);


Member4Router.post('/member4', (req, res) => {
    controller.create(req, res)
})


Member4Router.put('/member4', updateWish)
Member4Router.put('/member4/:id', updateWish)
Member4Router.delete('/member4', deleteWish)

module.exports = {Member4Router}