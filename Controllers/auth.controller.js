const UserModel = require("../Models/user.model.js");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

dotenv.config();

class AuthController {
  constructor() {
    console.log("Running Auth");
  }

  login = async (req, res) => {
    const { email, password } = req.body;
    console.log("BACKEND-SVAR:", req.body);

    if (email && password) {
      const data = await UserModel.findOne({
        attributes: ["id", "email", "password", "role_id"],
        where: { email: email },
      });
      if (data === null) {
        return res.send({ status: "Fejl i brugernavn/kode" });
      }
      bcrypt.compare(password, data.password, (err, result) => {
        if (result) {
          const payload = {
            user_id: data.id,
            email: data.email,
            role_id: data.role_id,
          };

          const token = jwt.sign(payload, process.env.SECRET);
          return res.json({ token: token, payload: payload });
        } else {
          res.sendStatus(401);
        }
      });
    } else {
      res.sendStatus(418);
    }
  };
}

module.exports = { AuthController };
