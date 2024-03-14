const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const characterSchema = new Schema({
    name: { 
        type: String, 
        required: true
    },
    class: { type: String, required:
        true
    },
    background: { type: String, required:
        false
    },
    race: { type: String, required:
        true
    },
    alignment: { type: String, required:
        true
    },
    experience: { type: Number, required:
        false
    },
    level: { type: Number, required:
        false
    },
    strength: { type: Number, required:
        true
    },
    dexterity: { type: Number, required:
        true
    },
    constitution: { type: Number, required:
        true
    },
    intelligence: { type: Number, required:
        true
    },
    wisdom: { type: Number, required:
        true
    },
    charisma: { type: Number, required:
        true
    },
    user: { type: Schema.Types.ObjectId, ref: "user" }
},
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
);

characterSchema.pre("save", async function (next) {
    if (this.experience < 300) {
        this.level = 1;
    } else if (this.experience < 900) {
        this.level = 2;
    } else if (this.experience < 2700) {
        this.level = 3;
    } else if (this.experience < 6500) {
        this.level = 4;
    } else if (this.experience < 14000) {
        this.level = 5;
    } else if (this.experience < 23000) {
        this.level = 6;
    } else if (this.experience < 34000) {
        this.level = 7;
    } else if (this.experience < 48000) {
        this.level = 8;
    } else if (this.experience < 64000) {
        this.level = 9;
    } else if (this.experience < 85000) {
        this.level = 10;
    } else if (this.experience < 100000) {
        this.level = 11;
    } else if (this.experience < 120000) {
        this.level = 12;
    } else if (this.experience < 140000) {
        this.level = 13;
    } else if (this.experience < 165000) {
        this.level = 14;
    } else if (this.experience < 195000) {
        this.level = 15;
    } else if (this.experience < 225000) {
        this.level = 16;
    } else if (this.experience < 265000) {
        this.level = 17;
    } else if (this.experience < 305000) {
        this.level = 18;
    } else if (this.experience < 355000) {
        this.level = 19;
    } else {
        this.level = 20;
    }
    next();
});

characterSchema.pre("save", async function (next) {
    if (this.user) {
        const user = await this.model("user").findById(this.user);
        user.characters.push(this._id);
        await user.save();
    }
    next();
});

const Character = model("character", characterSchema);

module.exports = Character;