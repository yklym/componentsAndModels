
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