const TestModel = require('../Models/test.model.js')

class TestController {
    constructor() {
        console.log('Instance call of roleController')
    }

    list = async (req, res) => {
        const result = await TestModel.findAll({
            attributes: [
                "id",
                "title",
                "description",
                "købt",
                "image",
                "url",
            ],
                    })
        res.json(result)
    };
    create = async (req, res) => {
        const {title} = req.body;

        if(title) {
            const wish = await TestModel.create(req.body)
            return res.json({newId: wish.id,
                message: "Ønske oprettet!"               
            })
        } else {
            res.sendStatus(418)
        }
    }

    
}

const getWishes = async (req, res) => {
    try {
        const wish = await TestModel.findAll();
        res.send(wish);
    } catch (err) {
        console.log(err);
    }
}


const updateWish = async (req, res) => {
    try {
        await TestModel.update(req.body, {
            where: {
                id: req.body.id
            }
        });
        res.json({
            "message": "Product Updated"
        });
    } catch (err) {
        console.log(err);
    }
}

const getWishById = async (req, res) => {
    try {
        const wish = await TestModel.findAll({
            where: {
                id: req.params.id
            }
        });
        res.send(wish[0]);
    } catch (err) {
        console.log(err);
    }
}

const deleteWish = async (req, res) => {
    try {
        await TestModel.destroy({
            where: {
                id: req.body.id
            }
        });
        res.json({"message": "Ønske slettet!"});
    } catch (err) {
        console.log(err);
    }
}

module.exports = {TestController, updateWish, getWishById, deleteWish, getWishes}