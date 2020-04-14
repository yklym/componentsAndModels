const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true }, 
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User'}], 
    documents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Document'}]
});

const teamModel = new mongoose.model('team', teamSchema);

module.exports = teamModel;