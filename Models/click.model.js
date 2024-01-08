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
    click: {
      type: DataTypes.INTEGER,
      allowNull: true,
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
