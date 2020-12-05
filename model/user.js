const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    googleId: String,
    userName: String,
    picture: String
})

mongoose.model("users", userSchema);