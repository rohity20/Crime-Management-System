const mongoose = require('mongoose');

const shiftSchema = new mongoose.Schema({

    day: [{
        officerId: {
            type: String,
        }
    }],
    night: [{
        officerId: {
            type: String,
        }
    }],

    extra: [{
        officerId: {
            type: String,
        }
    }],
   

})

module.exports = mongoose.model("Shift", shiftSchema);