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

    if (!email || !password) {
      return res.status(400).json({ error: "Email og password er påkrævet" });
    }

    try {
      const user = await UserModel.findOne({
        attributes: ["id", "email", "password", "role_id"],
        where: { email: email },
      });

      if (user === null) {
        return res.status(401).json({ error: "Fejl i email/kode" });
      }

      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        return res.status(401).json({ error: "Ugyldigt password" });
      }

      const payload = {
        user_id: user.id,
        email: user.email,
        role_id: user.role_id,
      };

      const token = jwt.sign(payload, process.env.SECRET);
      return res.json({ token: token, payload: payload });
    } catch (err) {
      console.error(err); // Log fejlen for debugging. Fjern eller ændre dette i produktion.
      return res.status(500).json({ error: "Intern serverfejl" });
    }
  };
}

module.exports = { AuthController };
