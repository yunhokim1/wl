"use strict";

const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body;
    }

    async login() {
        const client = this.body;
        try{
            const user = await UserStorage.getUserInfo(client.id);
            
            if (user) {
                if (user.id === client.id && user.psword === client.psword) {
                    return { success: true };
                }
                return { success: false, msg: "비밀번호가 틀렸습니다."};
            }
            return { success: false, msg: "존재하지 않는 아이디입니다."};
        } catch (err) {
            return { success: false, err};
        }
    }

    async find_id() {
        const client = this.body;
        try{
            const user = await UserStorage.find_id(client);
            
            if (user) {
                if (user.name === client.name && user.email === client.email && user.birthDay === client.birthDay) {
                    return { success: true, msg: client.name +"님의 아이디는 " + user.id + " 입니다." };
                }
                return { success: false, msg: "입력하신 정보가 틀렸습니다."};
            }
            return { success: false, msg: "입력하신 정보가 틀렸습니다."};
        } catch (err) {
            return { success: false, err};
        }
    }

    async register(){
        const client = this.body;
        try {
            const response = await UserStorage.save(client);
            return response;
        } catch (err) {
            return { success: false, err };
        }
    }

}

module.exports = User;