const ClickModel = require("../Models/click.model.js");

class ClickController {
  constructor() {
    console.log("Instance call of clickController");
  }

  list = async (req, res) => {
    try {
      const result = await ClickModel.findAll({
        attributes: ["id", "wishlists_clicks", "chatgpt_clicks", "last_clicked_at"],
      });
      res.json(result);
    } catch (error) {
      console.error("Error in listing clicks:", error);
      res.status(500).send("Internal Server Error");
    }
  };

  incrementClick = async (req, res) => {
    const { type } = req.body;
    const my_ip = process.env.MY_IP_ADDRESS;
    const clientIp = req.ip;

    if (my_ip === clientIp) {
      return res.status(200).send("Klik fra mig - ikke registreret i databasen", `My_ip: ${my_ip}, Client_ip: ${clientIp}`);
    }

    if (type === "wishlists" || type === "chatgpt") {
      try {
        const fieldName = `${type}_clicks`;
        const [clickRecord] = await ClickModel.findOrCreate({
          where: {}, // Ingen specifikke betingelser, da der kun er én række
          defaults: { [fieldName]: 0 },
        });

        clickRecord[fieldName] += 1;
        clickRecord.last_clicked_at = new Date();
        await clickRecord.save();

        return res.json({ message: "Click incremented successfully" });
      } catch (error) {
        console.error("Error incrementing click:", error);
        res.status(500).send("Internal Server Error");
      }
    } else {
      res.status(400).send("Invalid click type");
    }
  };
}

module.exports = { ClickController };
