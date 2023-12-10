const Member2Model = require("../Models/member2.model.js");
const RoleModel = require("../Models/role.model.js");
const UserModel = require("../Models/user.model.js");

RoleModel.belongsToMany(UserModel, { through: "junction" });
UserModel.belongsToMany(RoleModel, { through: "junction" });

class Member2Controller {
  constructor() {
    console.log("Instance call of roleController");
  }

  list = async (req, res) => {
    const result = await Member2Model.findAll({
      attributes: ["id", "title", "description", "købt", "image", "url"],
    });
    res.json(result);
  };
  create = async (req, res) => {
    const { title } = req.body;

    if (title) {
      const wish = await Member2Model.create(req.body);
      return res.json({ newId: wish.id, message: "Ønske oprettet!" });
    } else {
      res.sendStatus(418);
    }
  };
}

const getWishes = async (req, res) => {
  try {
    const wish = await Member2Model.findAll();
    res.send(wish);
  } catch (err) {
    console.log(err);
  }
};

const updateWish = async (req, res) => {
  if (req.method === "PUT") {
    try {
      // Your PUT request logic goes here

      const { id, data } = req.body; // Assuming you expect an 'id' and 'data' in the request body

      // Perform the necessary update or processing
      // Example: Update a database record
      // const updatedData = await updateDataInDatabase(id, data);

      res.status(200).json({ message: "Data updated successfully", id, data });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
};

const getWishById = async (req, res) => {
  try {
    const wish = await Member2Model.findAll({
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
    await Member2Model.destroy({
      where: {
        id: req.body.id,
      },
    });
    res.json({ message: "Ønske slettet!" });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { Member2Controller, updateWish, getWishById, deleteWish, getWishes };
