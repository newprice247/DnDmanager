// Here is where we define the user controller
require("dotenv").config();
const axios = require("axios");
const mongodb = require("mongodb");
const connection = require("../../config/connection");
const { User } = require("../../models");


module.exports = {
    async getUsers(req, res) {
        await User.find({})
            .then(users => {
                res.json(users);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    },
    async getUser(req, res) {
        await User.findById(req.params.id)
            .then(user => {
                res.json(user);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    }, 
    async createUser(req, res) {
        await User.create(req.body)
            .then(newUser => {
                res.json(newUser);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    },
    async updateUser(req, res) {
        await User.findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(user => {
                res.json(user);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    },
};