const userService = require("./user-service");
const User = require("../models/user-model")

module.exports = class AuthService {
    constructor() {}

    login(authUser) {
        return new Promise((resolve, reject) => {
            User.prototype.getAll()
            .then(users => {
                let matched = users.filter(user => {
                    return user.email == authUser.email
                })
                if (matched.length >= 1) {
                    resolve(authUser)
                }
                else {
                    reject("User not found / Incorrect email")
                }
            }
            )
            .catch(err => {
                console.log(err)
                reject(err);
            })
        })
    }
}