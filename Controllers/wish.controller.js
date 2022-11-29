const WishModel = require('../Models/wish.model.js')
const UserModel = require('../Models/user.model.js')
// const BrandsModel = require('../Models/brands.model.js')
// const RoleModel = require('../Models/role.model.js')

WishModel.belongsTo(UserModel)
UserModel.hasMany(WishModel)

// ProductsModel.belongsToMany(CategoriesModel, {through: 'junction'})
UserModel.belongsToMany(WishModel, {through: 'junction'})

class WishController {
    constructor() {
        console.log('Instance call of user controller')
    }

    // list = async (req, res) => {
    //     const result = await ProductsModel.findAll({
    //         where: {id: 1},
    //         include: [{
    //             model: CategoriesModel,
    //             attributes: ['name'],
    //             through: {
    //                 attributes: []
    //             }
    //         }]
    //     })
    //     res.json(result)
    // };

    
    list = async (req, res) => {
        const result = await WishModel.findAll()
        res.json(result)
    };

    create = async(req, res) => {
        console.log(req.body)
        const {title, description, image, url, købt} = req.body
        //&& description && price && horsepower && production_year && fuel_type && doors && seats && geartype && weight && acceleration && measurements && available && category_id
        if (title) {
            const wish = await WishModel.create(req.body)
            return res.json({newId: wish.id})
        } else {
            console.log('Create failed')
            res.sendStatus(418);
        }
    }
}

module.exports = {WishController}