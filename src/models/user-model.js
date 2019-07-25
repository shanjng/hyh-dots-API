fs = require("fs");
mysqlConn = require("../data-base/data-base");

module.exports = class User{
         
    constructor(user){
        this.id;
        this.name = user.name;
        this.email = user.email;
        this.password = user.password;
    }

    getAll() {
        return new Promise((resolve, reject) => {
            mysqlConn.query("Select * from user", (err, res) => {
                if (err) {
                  reject(err)
                } else {
                  resolve(res);
                }
              });
        })
  }
};