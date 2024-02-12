const axios = require('axios');

module.exports = {
    async getLanguages(req, res) {
        await axios.get('http://dnd5eapi.co/api/languages')
            .then(response => {
                res.json(response.data);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    },
    async getLanguageByName(req, res) {
        await axios.get(`http://dnd5eapi.co/api/languages/${req.params.name}`)
            .then(response => {
                res.json(response.data);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    }
};