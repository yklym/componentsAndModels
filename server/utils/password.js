const crypto = require('crypto');
const { PASSWORD_SALT } = require('../config/config');

const sha512 = (password, salt) => {
    const hash = crypto.createHmac('sha512', salt); 
    hash.update(password);
    return hash.digest('hex');
};

module.exports.hashPassword = (password) => {
    return sha512(password, PASSWORD_SALT);
}

module.exports.comparePassword = (password, hash) => {
    return hashPassword(password) === hash;
}