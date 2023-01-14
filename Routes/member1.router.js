const express = require('express')
const {Member1Controller, updateWish, getWishById, deleteWish, getWishes} = require('../Controllers/member1.controller.js')
const {verifyToken} = require('../Middleware/verifyToken.js')

const controller = new Member1Controller()

const Member1Router = express.Router()

Member1Router.get('/member1', getWishes);

Member1Router.get('/member1/:id', getWishById);


Member1Router.post('/member1', (req, res) => {
    controller.create(req, res)
})


Member1Router.put('/member1', updateWish)
Member1Router.put('/member1/:id', updateWish)
Member1Router.delete('/member1', deleteWish)

module.exports = {Member1Router}