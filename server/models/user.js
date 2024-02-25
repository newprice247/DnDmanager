const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { Schema, model } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: 'Username already exists',
        
    },
    email: {
        type: String,
        required: true,
        unique: 'Email already exists',
    },
    password: {
        type: String,
        required: true,
    },
    characters: [{type: Schema.Types.ObjectId, ref: "character"}]
});

userSchema.pre("save", async function(next) {
    const user = this;
    if (user.isModified("password")) {
        user.password = await bcrypt.hash(user.password, 8);
    }
    next();
});


const User = model("user", userSchema);

module.exports = User;