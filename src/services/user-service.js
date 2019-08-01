const User = require("../models/user-model");

module.exports = class UserService {
  constructor() {}

  getAll() {
    return new Promise((resolve, reject) => {
      User.prototype.getAll()
      .then(res => resolve(res))
      .catch(err => reject(err))
    })
  }
}