// Here is where we define the user controller
require("dotenv").config();
const { User } = require("../../models");

const { signToken } = require('../../utils/auth')


module.exports = {
    async getUsers(req, res) {
        await User.find({})
            .select('-__v -password')
            .then(users => {
                res.json(users);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    },
    async getUser({ user = null, params }, res) {
        await User.findOne({
            $or: [{ _id: user ? user._id : params.id }, { email: params.email}]
        })
            .select('-__v -password')
            .populate('characters')
            .then(user => {
                res.json(user);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    },
    async getUserByEmail({ params }, res) {
        await User.findOne({
            email: params.email
        })
            .select('-__v -password')
            .populate('characters')
            .then(user => {
                console.log(user);
                res.json(user);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    },
    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            const token = signToken(user);
            res.json({ token, user });
        } catch (error) {
            console.log('User Creation Unsuccessful');
            console.log(error);
            res.status(400).json({ message: "Not able to create user with these parameters" });
        }
    },
    async updateUser({ params, body }, res) {
        try {
            const updatedUser = await User.findByIdAndUpdate(
                { _id: params.id },
                { $set: body },
                { new: true, runValidators: true }
            );
            if (!updatedUser) {
                return res.status(400).json({ message: "Could not find a user with this id" });
            }
        } catch (error) {
            console.log('Update User Unsuccessful');
            console.log(error);
            res.status(400).json({ message: "Not able to update user with these parameters"});
        }
    },
    async addCharacterToUser({ params, body }, res) {
        try {
            const updatedUser = await User.findByIdAndUpdate(
                { _id: params.id },
                { $push: { characters: params.characterId } },
                { new: true, runValidators: true }
            );
            if (!updatedUser) {
                return res.status(400).json({ message: "Could not find a user with this id" });
            }
        }
        catch (error) {
            console.log('Add Character to User Unsuccessful');
            console.log(error);
            res.status(400).json({ message: "Not able to add character to user with these parameters"});
        }
    },
    async login({body}, res) {
        try {
            const user = await User.findOne({
                $or: [{username: body.username}, {email: body.email}]
            });
            if (!user) {
                return res.status(400).json({ message: "We can't find this user" });
            }
            const correctPw = await user.isCorrectPassword(body.password);
            if (!correctPw) {
                return res.status(400).json({ message: "Incorrect password!" });
            }
            const token = signToken(user);
            res.json({ token, user });
        } catch (error) {
            res.status(400).json({ message: "Sorry, something went wrong!" });
            console.log('Login attempt failed');
        }
    }
};