const express = require("express");
const { ClickController } = require("../Controllers/click.controller.js");
// const { verifyToken } = require("../Middleware/verifyToken.js");

const controller = new ClickController();

const ClickRouter = express.Router();

ClickRouter.get("/click", (req, res) => {
  controller.list(req, res);
});

ClickRouter.post("/click", (req, res) => {
  controller.create(req, res);
});

module.exports = { ClickRouter };
