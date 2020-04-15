const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

module.exports = {
    DB_URL: process.env.MONGODB_URL,
    CLOUDINARY_URL: process.env.CLOUDINARY_URL,
    PORT: process.env.PORT || 12000,
    PASSWORD_SALT: process.env.PASSWORD_SALT
};