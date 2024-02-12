const axios = require('axios');

module.exports = {
    async getTraits(req, res) {
        await axios.get('http://dnd5eapi.co/api/traits')
            .then(response => {
                res.json(response.data);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    },
    async getTraitByName(req, res) {
        await axios.get(`http://dnd5eapi.co/api/traits/${req.params.name}`)
            .then(response => {
                res.json(response.data);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    }
};