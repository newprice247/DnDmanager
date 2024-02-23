const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const characterSchema = new Schema({
    name: { type: String, required:
        true
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
        true
    },
    level: { type: Number, required:
        true
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

const Character = model("character", characterSchema);

module.exports = Character;