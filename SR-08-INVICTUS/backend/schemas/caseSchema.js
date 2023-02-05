const mongoose = require('mongoose');

const caseSchema = new mongoose.Schema({

    
    name: {
        type: String
    },
    
    
    email: {
        type: String
    },

    
    phone: {
        type: Number
    },

    description: {
        type: String
    },
    type: {
        type: String,
    },
    address: {
        type: String,
    },
    additonalInfo: {
        type: String,
    },
    status: {
        type: String,
        default: "new", // new , pending, alloted, solved
    },
    
    priority: {
        type: Number,  // 1, 2, 3
    },

    start_date: {
        type: Date,
        default: Date.now,
    },

    end_date: {
        type: Date,
        // default: Date.now,
    },

    alloted_officer: [
        {
        
            type: String,
          
        }
    ],

})

module.exports = mongoose.model("Case", caseSchema);