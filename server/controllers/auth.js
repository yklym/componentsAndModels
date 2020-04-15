const utils = require('../utils/password');
const UserModel = require('../models/user');

module.exports.register = async (req, res, next) => {
    const { firstName, lastName, password, email } = req.body;
    if (!firstName || !lastName || !password || !email) {
        // @todo some err handling
        res.status(400).json({
            err: 'error bliat'
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