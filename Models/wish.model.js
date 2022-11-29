const {sequelize} = require('../Config/db.sequelize.js')
const DataTypes = require('sequelize')
const {Model} = require('sequelize')

class WishModel extends Model {}

WishModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    title: {
        type: DataTypes.CHAR,
        allowNull: false,
    },
    description: {
        type: DataTypes.CHAR,
        allowNull: true,
    },
    url: {
        type: DataTypes.CHAR,
        allowNull: true,
    },
    image: {
        type: DataTypes.CHAR,
        allowNull: true,
    },
    købt: {
        type: DataTypes.INTEGER,
        allowNull: true,
    }
},
{
    sequelize,
    modelName: 'wish',
    freezeTableName: true,
    underscored: true,
    createdAt: false,
    updatedAt: false,
}
)

module.exports = WishModel;