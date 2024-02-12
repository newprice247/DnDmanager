const axios = require('axios');

module.exports = {
    async getFeatures(req, res) {
        await axios.get('http://dnd5eapi.co/api/features')
            .then(response => {
                res.json(response.data);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    },
    async getFeatureByName(req, res) {
        await axios.get(`http://dnd5eapi.co/api/features/${req.params.name}`)
            .then(response => {
                res.json(response.data);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    }
};