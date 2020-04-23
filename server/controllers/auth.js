const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");
const utils = require('../utils/password');
const UserModel = require('../models/user');

const {jwtAuthStrategy} = require("../utils/auth");
const passport = require("passport");
const api_secret = require('../config/config').JWT_SECRET;
passport.use(jwtAuthStrategy);
router.use(passport.initialize());


module.exports.register = async (req, res, next) => {

    const { firstName, lastName, password, email } = req.body;
    if (!firstName || !lastName || !password || !email) {
        // @todo some err handling
        res.status(400).json({
            err: 'error, mister' 
        });
        return;
    }

    const passwordHash = utils.hashPassword(password);
    const user = new UserModel({ firstName, lastName, passwordHash, email })

    try {
        await user.save();
        res.status(201).json({ user });

    } catch (err) {
        res.json({ err })
    }

};

// module.exports.checkToken = function (req, res) {
//     if (req.user) {
//         const token = jwt.sign({
//             email: req.user.email,
//             _id: req.user._id,
//             tgLogin: req.user.tgLogin,
//         }, api_secret, {
//             expiresIn: '10h'
//         });
//         // const decodedToken = jwt.decode(token);

//         const response = {
//             token: `${token}`,
//         };
//         res.status(201).json(response);
//     } else {
//         res.sendStatus(401).json({
//             token: false
//         }); // 'Not authorized'
//     }

// }

module.exports.login = async (req, res, next) => {
    const {
        email,
        password
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