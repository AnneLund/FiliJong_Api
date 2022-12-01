const {sequelize} = require('../Config/db.sequelize.js')
const DataTypes = require('sequelize')
const {Model} = require('sequelize')

class Member3Model extends Model {}
Member3Model.init({
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
        allowNull: false,
        defaultValue: 0
    }
},
{
    sequelize,
    modelName: 'member3_wishList',
    freezeTableName: true,
    underscored: true,
    createdAt: false,
    updatedAt: false,
}
)

module.exports = Member3Model;