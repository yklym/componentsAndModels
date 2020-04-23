const express = require('express');
const router = express.Router();

const utils = require('../utils/password');
const UserModel = require('../models/user');
const TeamModel = require("../models/team");

const {jwtAuthStrategy} = require("../utils/auth");
const passport = require("passport");

passport.use(jwtAuthStrategy);
router.use(passport.initialize());


module.exports.getAll = async (req, res, next) => {
    
    const userId = req.body.user;

    try{
        const teams = await TeamModel.find({
            members : {$in : [userId, ]}
        });
        res.json(teams).status(200);
    } catch (err){
        res.json({"err" : err}).status(200);
    }
};


