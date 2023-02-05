const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_SECRET='JREHRIUEHAGBAOIEDNFALQERPQBFQHFPRHA';

const userSchema = new mongoose.Schema({

    name: {
        type: String
    },
    password: {
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
        default: "user",
    },
    register_cases: [
        {
            caseId:{
                type: String,
            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    },

})



//  JWT TOKEN
userSchema.methods.getJWTToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    });
};

// Compare Password
userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
};


module.exports = mongoose.model("User", userSchema);