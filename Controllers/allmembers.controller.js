const AllMembersModel = require("../Models/allmembers.model.js");

class AllMembersController {
  constructor() {
    console.log("Instance call of roleController");
  }

  list = async (req, res) => {
    const result = await AllMembersModel.findAll({
      attributes: ["id", "title", "description", "købt", "image", "url"],
    });
    res.json(result);
  };
  create = async (req, res) => {
    const { title } = req.body;

    if (title) {
      const wish = await AllMembersModel.create(req.body);
      return res.json({ newId: wish.id, message: "Ønske oprettet!" });
    } else {
      res.sendStatus(418);
    }
  };

  update = async (req, res) => {
    const { id, title, description, købt, image, url } = req.body;

    if (id) {
      try {
        const existingWish = await AllMembersModel.findByPk(id);

        if (existingWish) {
          // Perform the update
          await existingWish.update({
            title,
            description,
            købt,
            image,
            url,
          });

          res.status(200).json({ message: "Data updated successfully", id });
        } else {
          res.status(404).json({ message: "Wish not found" });
        }
      } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal Server Error" });
      }
    } else {
      res.status(400).json({ message: "Bad Request - Missing 'id' in the request body" });
    }
  };
}

const getWishes = async (req, res) => {
  try {
    const wish = await AllMembersModel.findAll();
    res.send(wish);
  } catch (err) {
    console.log(err);
  }
};

const updateWish = async (req, res) => {
  try {
    await AllMembersModel.update(req.body, {
      where: {
        id: req.body.id,
      },
    });
    res.json({
      message: "Product Updated",
    });
  } catch (err) {
    console.log(err);
  }
};

const getWishById = async (req, res) => {
  try {
    const wish = await AllMembersModel.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.send(wish[0]);
  } catch (err) {
    console.log(err);
  }
};

const deleteWish = async (req, res) => {
  try {
    await AllMembersModel.destroy({
      where: {
        id: req.body.id,
      },
    });
    res.json({ message: "Ønske slettet!" });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { AllMembersController, updateWish, getWishById, deleteWish, getWishes };
