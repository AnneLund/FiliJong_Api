const ClickModel = require("../Models/click.model.js");

class ClickController {
  constructor() {
    console.log("Instance call of clickController");
  }

  list = async (req, res) => {
    try {
      const result = await ClickModel.findAll({
        attributes: ["id", "wishlists_clicks", "chatgpt_clicks"],
      });
      res.json(result);
    } catch (error) {
      console.error("Error in listing clicks:", error);
      res.status(500).send("Internal Server Error");
    }
  };

  incrementClick = async (req, res) => {
    const { type } = req.body;

    if (type === "wishlists" || type === "chatgpt") {
      try {
        const fieldName = `${type}_clicks`;
        const [clickRecord, created] = await ClickModel.findOrCreate({
          where: {}, // Ingen specifikke betingelser, da der kun er én række
          defaults: { [fieldName]: 0 },
        });

        clickRecord[fieldName] += 1;
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
