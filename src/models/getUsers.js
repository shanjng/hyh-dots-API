const express = require("express");
var client = require ("../auth/twit-auth");
module.exports = class Users{
    getUserByTopic(topic){
        return 'https://api.twitter.com/1.1/users/search.json?q='+topic;
        }
    userById(userId) {
        return 'https://api.twitter.com/1.1/users/lookup.json?user_id='+userId;
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

    getUserByID(userId){
        return new Promise((resolve, reject) => {
            client.get(this.userById(userId), function (error, response) {
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
    

