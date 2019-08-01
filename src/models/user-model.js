fs = require("fs");
pool = require("../data-base/data-base");

module.exports = class User{
         
    constructor(user){
        this.id;
        this.name = user.name;
        this.email = user.email;
        this.password = user.password;
    }

    getAll() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, conn) => {
              if (err) reject (err)
              conn.query("Select * from user", (err, res) => {
                conn.release()
                if (err) {
                  reject(err)
                } else {
                  resolve(res);
                }
              });
            })
        })
  }
};