const jwt = require('jsonwebtoken');
const api_secret = require('../config/config').JWT_SECRET;
const passport = require('passport');
const UserModel = require("../models/user");

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: api_secret
}

module.exports = {

    jwtAuthStrategy: JwtStrategy(opts, async (jwt_payload, done) => {
        const userModel = new UserModel();

        const result = await UserModel.findOne({
            email: jwt_payload.email
        });

        if (!result) {
            return done(null, false, {
                message: 'Incorrect username.'
            });
        } else {
            return done(null, result);
        }

    }),

    checkAuth: passport.authenticate("jwt", {
        session: false
    }),
};