var Users = require('../models/getUsers');

module.exports = class userService {

    getVerifiedUsers(filter){
        return new Promise ((resolve, reject)=>{
            if (filter.topic==""){
                filter.topic = "fashion";
            }
            Users.prototype.getUsers(filter.topic).then(users =>{
                let verifiedUsers=[];
                if (!filter.count) {
                    filter.count=10000;
                }
                for (var i=0; i< users.length;i++){
                    if (users[i].verified){
                        if (users[i].followers_count >=filter.count){
                            verifiedUsers.push(users[i].screen_name);

                        }
                    }
                }
                resolve(verifiedUsers);
            }).catch(err=>{
                reject(err);
            })
        })

    }

}