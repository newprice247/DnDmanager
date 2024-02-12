const axios = require('axios');

module.exports = {
    async getWeaponProperties(req, res) {
        await axios.get('http://dnd5eapi.co/api/weapon-properties/')
            .then(response => {
                res.json(response.data);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    },
    async getWeaponPropertyByName(req, res) {
        await axios.get(`http://dnd5eapi.co/api/weapon-properties/${req.params.name}`)
            .then(response => {
                res.json(response.data);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    }
};