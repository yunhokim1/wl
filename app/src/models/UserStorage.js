"use strict";

class UserStorage {
    static #users = {
     id: ["woorimIT", "나개발", "김팀장"],
     psword: ["1234", "1234", "123456"],
     name: ["우리밋", "나개발", "김팀장"],
    };

    static getUsers(...fields) {
        return this.#users;
        const newUsers = fields.reduce((newUsers,field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return;
    }
}

module.exports = UserStorage;