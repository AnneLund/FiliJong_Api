const express = require("express");
const { AllMembersController, updateWish, getWishById, deleteWish, getWishes } = require("../Controllers/allmembers.controller.js");
const { verifyToken } = require("../Middleware/verifyToken.js");

const controller = new AllMembersController();

const AllMembersRouter = express.Router();

AllMembersRouter.get("/allmembers", getWishes);

AllMembersRouter.get("/allmembers/:id", getWishById);

AllMembersRouter.post("/allmembers", (req, res) => {
  controller.create(req, res);
});

AllMembersRouter.put("/allmembers", updateWish);
AllMembersRouter.put("/allmembers/:id", updateWish);
AllMembersRouter.delete("/allmembers", deleteWish);

module.exports = { AllMembersRouter };
