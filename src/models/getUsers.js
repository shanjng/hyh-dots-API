const express = require("express");
var client = require ("../auth/twit-auth");
module.exports = class Users{
    getUserByTopic(topic){
        return 'https://api.twitter.com/1.1/users/search.json?q='+topic;
        }
    
    getUsers(topic){
        return new Promise((resolve, reject) => {
            client.get(this.getUserByTopic(topic), function (error, response) {
                if (error) {
                    console.log("error:", error);
                    reject(error);
                }
                else {
                    resolve(response);
                }
            });
        });
    }
}
    

