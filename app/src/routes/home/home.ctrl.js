"use strict";


const output = {
    hello: (req, res) => {
        res.render("home/index");
    },
    login: (req,res) => {
        res.render("home/login");
    },
};

const users = {
    id: ["woorimIT", "나개발", "김팀장"],
    psword: ["1234", "1234", "123456"],
};

const process = {
    login: (req, res) => {
        const id = req.body.id,
            psword = req.body.psword;

        const response = {};
        if (users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if (users.psword[idx] === psword) {
                response.success = true;
                return res.json(response);
            }
        }


        response.success = false;
        response.msg = "로그인에 실패하셨습니다."
        return res.json(response);
        
    },
};

module.exports = {
    output,
    process,
};