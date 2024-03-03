require('dotenv').config()
const faker = require('faker')
const connection = require('../config/connection')
const User = require('../models/user')
const Character = require('../models/character')

async function seedCharacters(numberOfCharacters) {
    try {
        const characters = [];
        for (let i = 0; i < numberOfCharacters; i++) {
            const character = new Character({
                name: faker.name.firstName(),
                class: faker.random.arrayElement(['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard']),
                background: faker.random.arrayElement(['Noble', 'Outlander', 'Acolyte', 'Criminal']),
                race: faker.random.arrayElement(['Dragonborn', 'Dwarf', 'Elf', 'Gnome', 'Half-Elf', 'Half-Orc', 'Halfling', 'Human', 'Tiefling']),
                alignment: faker.random.arrayElement(['Chaotic Evil', 'Chaotic Good', 'Chaotic Neutral', 'Lawful Evil', 'Lawful Good', 'Lawful Neutral', 'Neutral Evil', 'Neutral Good', 'Neutral Neutral']),
                experience: faker.datatype.number({ min: 0, max: 355000 }),
                strength: faker.datatype.number({ min: 8, max: 20 }),
                dexterity: faker.datatype.number({ min: 8, max: 20 }),
                constitution: faker.datatype.number({ min: 8, max: 20 }),
                intelligence: faker.datatype.number({ min: 8, max: 20 }),
                wisdom: faker.datatype.number({ min: 8, max: 20 }),
                charisma: faker.datatype.number({ min: 8, max: 20 }),
            });
            characters.push(character);
        }
        for (let i = 0; i < characters.length; i++) {
            if (characters[i].experience < 300) {
                characters[i].level = 1;
            } else if (characters[i].experience < 900) {
                characters[i].level = 2;
            } else if (characters[i].experience < 2700) {
                characters[i].level = 3;
            } else if (characters[i].experience < 6500) {
                characters[i].level = 4;
            } else if (characters[i].experience < 14000) {
                characters[i].level = 5;
            } else if (characters[i].experience < 23000) {
                characters[i].level = 6;
            } else if (characters[i].experience < 34000) {
                characters[i].level = 7;
            } else if (characters[i].experience < 48000) {
                characters[i].level = 8;
            } else if (characters[i].experience < 64000) {
                characters[i].level = 9;
            } else if (characters[i].experience < 85000) {
                characters[i].level = 10;
            } else if (characters[i].experience < 100000) {
                characters[i].level = 11;
            } else if (characters[i].experience < 120000) {
                characters[i].level = 12;
            } else if (characters[i].experience < 140000) {
                characters[i].level = 13;
            } else if (characters[i].experience < 165000) {
                characters[i].level = 14;
            } else if (characters[i].experience < 195000) {
                characters[i].level = 15;
            } else if (characters[i].experience < 225000) {
                characters[i].level = 16;
            } else if (characters[i].experience < 265000) {
                characters[i].level = 17;
            } else if (characters[i].experience < 305000) {
                characters[i].level = 18;
            } else if (characters[i].experience < 355000) {
                characters[i].level = 19;
            } else {
                characters[i].level = 20;
            }
        }
                
        await Character.insertMany(characters);
        console.log(`${numberOfCharacters} characters seeded successfully.`);
    } catch (error) {
        console.error('Error seeding characters:', error);
    }
}

async function seedUsers(numberOfUsers) {
    try {
        const users = [];
        for (let i = 0; i < numberOfUsers; i++) {
            const user = new User({
                username: faker.internet.userName(),
                email: faker.internet.email(),
                password: 'password1',
            });
            users.push(user);
        }
        await User.insertMany(users);
        await Character.find({})
        .then(characters => {
            characters.forEach(async character => {
                const user = await User.findOneAndUpdate(
                    { _id: faker.random.arrayElement(users)._id },
                    { $push: { characters: character._id } },
                    { new: true }
                );
                console.log(`Character ${character.name} assigned to user ${user.username}`);
            }
            );
        });
        console.log(`${numberOfUsers} users seeded successfully.`);
    } catch (error) {
        console.error('Error seeding users:', error);
    }
}

connection.once("open", async () => {
    console.log('seeder connected')

    const currentUsers = await User.find({}).lean();
    if (currentUsers.length > 0) {
        await User.deleteMany({});
        console.log('User table dropped');
    }

    const currentCharacters = await Character.find({}).lean();
    if (currentCharacters.length > 0) {
        await Character.deleteMany({});
        console.log('Character table dropped');
    }

    await seedCharacters(10);
    await seedUsers(10);
    console.log('All data seeded successfully');

    process.exit(0);
})