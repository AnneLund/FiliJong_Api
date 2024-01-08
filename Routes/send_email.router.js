const express = require("express");
const { EmailController } = require("../controllers/EmailController");

const emailRouter = express.Router();
const emailController = new EmailController();

// Definer '/send-email' rute med EmailController's sendEmail metode
emailRouter.post("/send-email", emailController.sendEmail);

module.exports = emailRouter;
