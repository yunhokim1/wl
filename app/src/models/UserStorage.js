"use strict";

const db = require("../config/db");

class UserStorage {
    static getUserInfo(id) {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM users WHERE id = ?;";
            db.query(query, [id], (err, data) => {
                if (err) reject(`${err}`);
                else resolve(data[0]);
            });
        });
    }

    static find_id(userInfo) {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM users WHERE name = ? and email = ? and birthDay = ?;";
            db.query(query, [userInfo.name, userInfo.email, userInfo.birthDay], (err, data) => {
                if (err) reject(`${err}`);
                else resolve(data[0]);
            });
        });
    }

    static find_psword(userInfo) {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM users WHERE id = ? and name = ? and email = ? and birthDay = ?;";
            db.query(query, [userInfo.id, userInfo.name, userInfo.email, userInfo.birthDay], (err, data) => {
                if (err) reject(`${err}`);
                else resolve(data[0]);
            });
        });
    }

    static async newPsword(userInfo){
        return new Promise((resolve, reject) => {
            const query = "UPDATE users SET psword = ? WHERE id = ?;";
            db.query(query, [userInfo.psword, userInfo.id], (err) => {
                if (err) {
                    reject(`${err}`);
                } else {
                    resolve({ success: true });
                }
            });
        });
    }

    static async save(userInfo){
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO users(id, name, psword, email, birthDay) VALUES(?, ?, ?, ?, ?);";
            db.query(query, [userInfo.id, userInfo.name, userInfo.psword, userInfo.email, userInfo.birthDay], (err) => {
                if (err) {
                    reject(`${err}`);
                } else resolve({ success: true });
                
            });
        });
    }
}
module.exports = UserStorage;