const RoleModel = require('../Models/role.model')

class RoleController {
    constructor() {
        console.log('Instance call of roleController')
    }

    list = async (req, res) => {
        const result = await RoleModel.findAll()
        res.json(result)
    };
    create = async (req, res) => {
        const {role} = req.body;

        if(role) {
            const model = await RoleModel.create(req.body)
            return res.json({newId: model.id})
        } else {
            res.send(418)
        }
    }
}

module.exports = {RoleController}