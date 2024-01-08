const { sequelize } = require("../Config/db.sequelize.js");
const DataTypes = require("sequelize");
const { Model } = require("sequelize");

class ClickModel extends Model {}

ClickModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    wishlists_clicks: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    chatgpt_clicks: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    modelName: "click",
    freezeTableName: true,
    underscored: true,
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = ClickModel;
