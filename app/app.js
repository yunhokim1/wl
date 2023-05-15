"use strict";
// 모듈

const express = require("express");
const path = require("path");
const dotenv = require("dotenv");



const accessLogStream = require("./src/config/logger");
dotenv.config();
const app = express();


// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(__dirname+`/src/public`));
app.use(express.json());
// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(express.urlencoded({extended:true}));


app.use("/", home); // use -> 미들 웨어를 등록해주는 메서드.

var session=require('express-session')
var MySQLStore = require('express-mysql-session')(session)
var db = require('./src/config/db')
var sessionStore = new MySQLStore(db)
app.use(session({
  secret: 'my key',
  resave: false,
  saveUninitialized: true,
  store: sessionStore
}))


module.exports = app;