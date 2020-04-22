const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true, trim: true }, 
    avaUrl: { type: String, trim: true },
    lastName: { type: String, required: true, trim: true }, 
    email: { type: String, required: true, trim: true },
    passwordHash: { type: String, required: true }, 
    bio: { type: String, trim: true },
}, { versionKey: false });

// versionKey: false, что бы не было поля _v

const UserModel = new mongoose.model('user', userSchema);

module.exports = UserModel;