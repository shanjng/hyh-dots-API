var Users = require('../models/getUsers');

module.exports = class userService {

    getFilteredUsers(filter){
        return new Promise ((resolve, reject)=>{
            if (filter.topic==undefined){
                filter.topic = "fashion";
            }
            Users.prototype.getUsers(filter.topic).then(users =>{
                let verifiedUsers=[];
                if (filter.count==undefined) {
                    filter.count=[0,1000000];
                }
                for (var i=0; i< users.length;i++){
                    if (filter.verified=="true") {
                        if (users[i].verified){
                            if ((filter.count[0]< users[i].followers_count) &&( users[i].followers_count<= filter.count[1])){
                                if (filter.location!=undefined){
                                    if (users[i].location.includes(filter.location)){
                                        verifiedUsers.push(users[i]);
                                }
                            }
                            else{verifiedUsers.push(users[i]);
                            }
                            }
                        }
                    }
                        else {
                            if ((filter.count[0]< users[i].followers_count) &&( users[i].followers_count<= filter.count[1])){
                                if (filter.location!=undefined){
                                    if (users[i].location.includes(filter.location)){
                                        verifiedUsers.push(users[i]);
                                }
                            }
                            else{
                                verifiedUsers.push(users[i]);
                            }
                            }
                            }

                }
    
  

                
                resolve(verifiedUsers);
            }).catch(err=>{
                reject(err);
            })
        })

    }

    getUserByLocation(filter){
        return new Promise ((resolve,reject)=>{
            this.getVerifiedUsers(filter).then(users =>{
                console.log("users",users);
                let verifiedUsers=[];
                for (var i=0; i< users.length;i++){
                    console.log("user",users[i].location);
                    console.log("filter",filter.location);
                    if (users[i].location==filter.location){
                        verifiedUsers.push(users[i]);
                    }
                }

                resolve(verifiedUsers);
            }).catch(err=>{
                reject(err);
            })

        })

    }

}