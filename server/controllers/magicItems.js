const axios = require('axios');

module.exports = {
    async getMagicItems(req, res) {
        await axios.get('http://dnd5eapi.co/api/magic-items')
            .then(response => {
                res.json(response.data);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    },
    async getMagicItemByName(req, res) {
        await axios.get(`http://dnd5eapi.co/api/magic-items/${req.params.name}`)
            .then(response => {
                res.json(response.data);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    }
};