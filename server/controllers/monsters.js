const axios = require('axios');

module.exports = {
    async getMonsters(req, res) {
        await axios.get('http://dnd5eapi.co/api/monsters')
            .then(response => {
                res.json(response.data);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    },
    async getMonsterByName(req, res) {
        await axios.get(`http://dnd5eapi.co/api/monsters/${req.params.name}`)
            .then(response => {
                res.json(response.data);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    }
};