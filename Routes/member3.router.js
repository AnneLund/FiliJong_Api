const express = require("express");
const { Member3Controller, updateWish, getWishById, deleteWish, getWishes } = require("../Controllers/member3.controller.js");
const { verifyToken } = require("../Middleware/verifyToken.js");

const controller = new Member3Controller();

const Member3Router = express.Router();

Member3Router.get("/member3", getWishes);

Member3Router.get("/member3/:id", getWishById);

Member3Router.post("/member3", (req, res) => {
  controller.create(req, res);
});

Member3Router.put("/member3/:id", (req, res) => {
  controller.update(req, res);
});

Member3Router.put("/member3", updateWish);
Member3Router.put("/member3/:id", updateWish);
Member3Router.delete("/member3", deleteWish);

module.exports = { Member3Router };
