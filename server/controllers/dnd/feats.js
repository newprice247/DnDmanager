const axios = require('axios');

module.exports = {
    async getFeats(req, res) {
        await axios.get('http://dnd5eapi.co/api/feats')
            .then(response => {
                res.json(response.data);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    },
    async getFeatByName(req, res) {
        await axios.get(`http://dnd5eapi.co/api/feats/${req.params.name}`)
            .then(response => {
                res.json(response.data);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    }
};