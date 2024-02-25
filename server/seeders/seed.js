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
                class: faker.random.arrayElement(['Warrior', 'Mage', 'Rogue', 'Cleric']),
                background: faker.random.arrayElement(['Noble', 'Outlander', 'Acolyte', 'Criminal']),
                race: faker.random.arrayElement(['Human', 'Elf', 'Dwarf', 'Halfling']),
                alignment: faker.random.arrayElement(['Lawful Good', 'Neutral Good', 'Chaotic Good', 'Lawful Evil', 'Neutral Evil', 'Chaotic Evil']),
                experience: faker.datatype.number({ min: 0, max: 1000 }),
                level: faker.datatype.number({ min: 1, max: 20 }),
                strength: faker.datatype.number({ min: 1, max: 20 }),
                dexterity: faker.datatype.number({ min: 1, max: 20 }),
                constitution: faker.datatype.number({ min: 1, max: 20 }),
                intelligence: faker.datatype.number({ min: 1, max: 20 }),
                wisdom: faker.datatype.number({ min: 1, max: 20 }),
                charisma: faker.datatype.number({ min: 1, max: 20 }),
            });
            characters.push(character);
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
                password: faker.internet.password(),
            });
            users.push(user);
        }
        await User.insertMany(users);
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