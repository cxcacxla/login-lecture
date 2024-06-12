"use strict";

const { reduce } = require("async");

class UserStorage {
    static #users = {
        id: ["이도헌","이준호","김승민"],
        psword: ["1234", "12345", "123456"],
        name: ["이1도헌","이1준호","김1승민"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, fields) => {
            if (users.hasOwnProperty(fields)) {
                newUsers[fields] = users[fields];
            }
            return newUsers;
        },{});
        return newUsers;
        
    }
}

module.exports = UserStorage;