const express = require('express');
const router = express.Router();

const utils = require('../utils/password');
const UserModel = require('../models/user');
const DocumentModel = require("../models/document");

const {jwtAuthStrategy} = require("../utils/auth");
const passport = require("passport");

passport.use(jwtAuthStrategy);
router.use(passport.initialize());


module.exports.getAll = async (req, res, next) => {
    
    const authorId = req.body.author;

    try{
        const docs = await DocumentModel.find({
            author: authorId
        });
        res.json(docs).status(200);
    } catch (err){
        res.json({"err" : err}).status(200);
    }
};


module.exports.getById = async (req, res, next) => {
    
    let docId = req.params.id;
    const authorId = req.body.author;

    try{
        const docs = await DocumentModel.findById(docId);
        res.json(docs).status(200);
    } catch (err){
        res.json({"err" : err}).status(400);
    }
};

module.exports.delete = async (req, res, next) => {
    let docId = req.params.id;

    try{
        await DocumentModel.findByIdAndDelete(docId);
        
        res.json().status(200);
    } catch (err){
        res.json({"err" : err}).status(400);
    }
    
};


module.exports.createDoc = async (req, res, next) => {
    const {
        title,
        team,
        bio,
        file
    } = req.body;
 
    
    const user = await UserModel.findOne({
        email: email
    });
 
    if(!user){
        res.status(406).json({
            err: "wrong login"
        });
        return;
    }

    if(user.passwordHash !== utils.hashPassword(password)){
        res.status(406).json({
            err: "wrong password"
        });
        return;
    }

    const token = jwt.sign({
        email: user.email,
        firstName : user.firstName,
        lastName : user.lastName,
        _id: user._id,
    }, api_secret, {
        expiresIn: '10h'
    });

    const response = {
        token: `${token}`,
    };

    res.status(200).json({
        response: response
    })
};