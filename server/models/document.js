const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
    title: { type: String, trim: true }, 
    url: { type: String, required: true }, 
    type: { type: String, trim: true }, 
    author: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' }
});

const documentModel = new mongoose.model('document', documentSchema);

module.exports = documentModel;