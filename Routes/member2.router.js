const express = require('express')
const {Member2Controller, updateWish, getWishById, deleteWish, getWishes} = require('../Controllers/Member2.controller.js')
const {verifyToken} = require('../Middleware/verifyToken.js')

const controller = new Member2Controller()

const Member2Router = express.Router()



Member2Router.get('/member2', getWishes);

Member2Router.get('/member2/:id', getWishById);


Member2Router.post('/member2', (req, res) => {
    controller.create(req, res)
})


Member2Router.put('/member2', updateWish)
Member2Router.put('/member2/:id', updateWish)
Member2Router.delete('/member2', deleteWish)

module.exports = {Member2Router}