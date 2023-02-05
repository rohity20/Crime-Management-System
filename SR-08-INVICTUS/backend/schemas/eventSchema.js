const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({

    description: {
        type: String,
    },
    no_officer: {
        type: Number,
    },

    officerId: [{
        type: String,
    }],


})

module.exports = mongoose.model("Event", eventSchema);