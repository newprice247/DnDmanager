const axios = require('axios');

module.exports = {
    async getSpells(req, res) {
        await axios.get('http://dnd5eapi.co/api/spells')
            .then(response => {
                res.json(response.data);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    },
    async getSpellByName(req, res) {
        await axios.get(`http://dnd5eapi.co/api/spells/${req.params.name}`)
            .then(response => {
                res.json(response.data);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    }
};