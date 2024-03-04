const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { Schema, model } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: 'A valid username is required',
        unique: 'Username already exists',

    },
    email: {
        type: String,
        required: 'A valid email address is required',
        unique: 'Email already exists',
        match: /[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/
    },
    password: {
        type: String,
        required: true,
    },
    characters: [
        {
            type: Schema.Types.ObjectId,
            ref: "character"
        }
    ]
});

userSchema.pre("save", async function (next) {
    if (this.isNew || this.isModified("email")) {
        try {
            this.email = this.email.toLowerCase();
        } catch (error) {
            console.log('Unsuccessful attempt to lowercase email on user modification');
            console.log(error);
        }
    }
    if (this.isNew || this.isModified("password")) {
        try {
            this.password = await bcrypt.hash(this.password, 8);
        } catch (error) {
            console.log('Unsuccessful attempt to hash password on user modification');
            console.log(error);
        }
    }
    next();
});


userSchema.methods.isCorrectPassword = async function (password) {
    try {
        return bcrypt.compare(password, this.password);
    } catch (error) {
        console.log('Bcrypt password comparison failed');
        console.log(error);
    }
};

userSchema.virtual("characterCount").get(function () {
    try {
        return this.characters.length;
    } catch (error) {
        console.log('Could not return user characters');
        console.log(error);
    }
})


const User = model("user", userSchema);

module.exports = User;