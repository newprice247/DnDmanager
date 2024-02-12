const axios = require('axios');

module.exports = {
    async getDamageTypes(req, res) {
        await axios.get('http://dnd5eapi.co/api/damage-types')
            .then(response => {
                res.json(response.data);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    },
    async getDamageTypeByName(req, res) {
        await axios.get(`http://dnd5eapi.co/api/damage-types/${req.params.name}`)
            .then(response => {
                res.json(response.data);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    }
};