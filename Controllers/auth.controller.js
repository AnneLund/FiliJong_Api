const UserModel = require('../Models/user.model.js')
const dotenv = require('dotenv')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

dotenv.config()

class AuthController {
    constructor() {
        console.log('Running Auth')
    }

    login = async (req, res) => {
        const {username, password} = req.body;
        console.log(req.body)

        if(username && password) {
            const data = await UserModel.findOne({
                attributes: ["id", "username", "password"],
                where: {username: username}
            })
            if(data === null) {
                return res.sendStatus(404)
            }
            bcrypt.compare(password, data.password, (err, result) => {
                if(result) {
                    const payload = {
                    user_id: data.id,
                    username: data.username,     
                    }
                    const token = jwt.sign(payload, process.env.SECRET )
                    return res.json({token: token})
                    
                } else {
                    res.sendStatus(401)
                }
            })
        } else {
            res.sendStatus(418)
        }
    }
}

module.exports = {AuthController}