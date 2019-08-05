fs = require("fs");
pool = require("../data-base/data-base");

module.exports = class User{
  
  constructor(user){
      this.id;
      this.name = user.name;
      this.email = user.email;
      this.password = user.password;
      this.location = user.location;
      this.username = user.username;
      this.ethnicity = user.ethnicity;
      this.gender = user.gender;
      this.age = user.age;
      this.phone = user.phone;
      this.industry = user.industry;
      this.bio = user.bio;
      this.imgUrl = user.imgUrl;
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
  update(req) {
    return new Promise((resolve, reject) => {
        let sql = `UPDATE user
        SET name = ?,
         email = ?,
         password = ?,
         location = ?,
         username = ?,
         ethnicity = ?,
         gender = ?,
         age = ?,
         phone = ?,
         industry = ?,
         bio = ?,
         imgUrl = ?
        WHERE id = ?`
        let data = [req.name, req.email, req.password, req.location, req.username, req.ethnicity, req.gender, req.age, req.phone, req.industry, req.bio, req.imgUrl, req.id];
        pool.getConnection((err, conn) => {
          if (err) reject (err)
          conn.query(sql, data, (err, results) => {
              if (err){
                  reject(err);
              }
              resolve(results)
          });
        })
      })
  }

  getById(id) {
    return new Promise((resolve, reject) => {
      pool.getConnection((err, conn) => {
        if(err) reject(err)
        conn.query('Select * from user where id = ?', id, (err, res)=>{
          conn.release()
          if (err) {
            reject(err)
          } else {
            resolve(res[0])
          }
        })
      })
    })
  }

};