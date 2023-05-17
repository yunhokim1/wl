"use strict";

const logger = require("../../config/logger");
const User = require("../../models/User");

const output = {
    hello: (req, res) => {
        logger.info(`GET / 304 "홈 화면으로 이동`);
        res.render("home/index");
    },
    login: (req,res) => {
        logger.info(`GET /login 304 "로그인 화면으로 이동`);
        res.render("home/login");
    },
    register: (req,res) => {
        logger.info(`GET /register 304 "회원가입 화면으로 이동`);
        res.render("home/register");
    },
    movie_info: (req,res) => {
        logger.info(`GET /movie_info 304 "무비정보 화면으로 이동`);
        res.render("home/movie_info");
    },
    find_id: (req,res) => {
        logger.info(`GET /find_id 304 "아이디 찾기 화면으로 이동`);
        res.render("home/find_id");
    },
    find_id_result: (req,res) => {
        logger.info(`GET /find_id 304 "아이디 찾기 화면으로 이동`);
        res.render("home/find_id_result");
    },
    find_psword: (req,res) => {
        logger.info(`GET /find_psword 304 "비밀번호 찾기 화면으로 이동`);
        res.render("home/find_psword");
    },
    find_psword_result: (req,res) => {
        logger.info(`GET /find_psword 304 "비밀번호 찾기 화면으로 이동`);
        res.render("home/find_psword_result");
    },
    profile: (req,res) => {
        logger.info(`GET /profile 304 "프로필 화면으로 이동`);
        res.render("home/profile");
    },
    change_psword: (req,res) => {
        logger.info(`GET /change_psword 304 "비밀번호 변경 화면으로 이동`);
        res.render("home/change_psword");
    },
    delete_account: (req,res) => {
        logger.info(`GET /delete_account 304 "계정 삭제 화면으로 이동`);
        res.render("home/delete_account");
    },
    settings: (req,res) => {
        logger.info(`GET /settings 304 "가족안심설정 화면으로 이동`);
        res.render("home/settings");
    }
};


const process = {
    login: async (req, res) => {
        const user = new User(req.body);
        const response = await user.login();

        const url = {
            method: "POST",
            path: "/login",
            status: response.err ? 400 : 200,
        };

        log(response, url);
        return res.status(url.status).json(response);
    },
    
    register: async (req, res) =>{
        const user = new User(req.body);
        const response = await user.register();

        const url = {
            method: "POST",
            path: "/register",
            status: response.err ? 409 : 201,
        };

        log(response, url);
        return res.status(url.status).json(response);
    }
};

module.exports = {
    output,
    process,
};

const log = (response, url) => {
    if (response.err) {
        logger.error(
            `${url.method} ${url.path} ${url.status} Response: ${response.success} ${response.err}}`
        );
    } else {
        logger.info(
            `${url.method} ${url.path} ${url.status} Response: ${response.success} ${response.msg || ""}`
        );
    }
};