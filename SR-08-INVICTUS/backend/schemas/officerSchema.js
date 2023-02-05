const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const sendToken = require("../utils/jwtToken");

const officerSchema = new mongoose.Schema({

    name: {
        type: String
    },
    phone: {
        type: Number,
    },
    email: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    country: {
        type: String
    },
    role: {
        type: String,
        default: "officer",
    },
    rank: {
        type: String, //L1, L2, L3
    },
    shift: {
        type: String, // DAY, NIGHT, EXTRA
    },
    alloted_cases: [
        {
           
           type: String,
      
        }
    ],
    pending_cases: [
        {
    
            type: String,
         
        }
    ],
    completed_cases: [
        {
            
            type: String,
            
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    },

})



//  JWT TOKEN
officerSchema.methods.getJWTToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    });
};

// Compare Password
officerSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
};


module.exports = mongoose.model("Officer", officerSchema);