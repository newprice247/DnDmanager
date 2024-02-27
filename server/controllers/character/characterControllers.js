require("dotenv").config();
const axios = require("axios");
const mongodb = require("mongodb");
const connection = require("../../config/connection");
const { Character } = require("../../models");

module.exports = {
    async getCharacters(req, res) {
        await Character.find({ user: req.params.id })
            .then(characters => {
                res.json(characters);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    },
    async getCharacter(req, res) {
        await Character.findById(req.params.name)
            .then(character => {
                res.json(character);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    }
};