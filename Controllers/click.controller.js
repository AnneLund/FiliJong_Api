const ClickModel = require("../Models/click.model.js");
class ClickController {
  constructor() {
    console.log("Instance call of clickController");
  }

  list = async (req, res) => {
    const result = await ClickModel.findAll({
      attributes: ["id", "wishlists", "chatgpt"],
    });
    res.json(result);
  };
  create = async (req, res) => {
    const { click } = req.body;

    if (click) {
      const model = await ClickModel.create(req.body);
      return res.json({ newId: model.id });
    } else {
      res.send(418);
    }
  };
}

module.exports = { ClickController };
