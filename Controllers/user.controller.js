const UserModel = require('../Models/user.model.js')
const RoleModel = require('../Models/role.model.js')

UserModel.belongsTo(RoleModel)
RoleModel.hasMany(UserModel)

class UserController {
    constructor() {
        console.log('Instance call of user controller')
    }

    list = async (req, res) => {
        const result = await UserModel.findAll({
attributes: [
    "id",
    "username"
],
include:[{
    model: RoleModel,
    attributes: ["id", "role"],
}
],
        })
        res.json(result)
    };

    create = async(req, res) => {
        console.log(req.body)
        const {username, password} = req.body
        if (username && password) {
            const user = await UserModel.create(req.body)
            return res.json({newId: user.id})
        } else {
            console.log('Create failed')
            res.sendStatus(418);
        }
    }
}

module.exports = {UserController}