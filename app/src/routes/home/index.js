"use strict";

const express = require("express");
const router = express.Router();


const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);
router.get("/movie_info", ctrl.output.movie_info);
router.get("/find_id", ctrl.output.find_id);
router.get("/find_id_result", ctrl.output.find_id_result);
router.get("/find_psword", ctrl.output.find_psword);
router.get("/find_psword_result", ctrl.output.find_psword_result);
router.get("/profile", ctrl.output.profile);
router.get("/change_psword", ctrl.output.change_psword);
router.get("/delete_account", ctrl.output.delete_account);
router.get("/settings", ctrl.output.settings);


router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);
router.post("/find_id", ctrl.process.find_id);
router.post("/find_psword", ctrl.process.find_psword);


module.exports = router;                                                