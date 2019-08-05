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

  update(req) {
    return new Promise((resolve, reject) => {
      User.prototype.update(req)
      .then(res => resolve(res))
      .catch(err => reject(err))
    })
  }

  getById(id){
    return new Promise((resolve, reject) => {
      User.prototype.getById(id)
      .then(res => resolve(res))
      .catch(err => reject(err))
    })
  }

}