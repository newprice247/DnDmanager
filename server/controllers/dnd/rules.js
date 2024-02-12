const axios = require('axios');

module.exports = {
    async getRules(req, res) {
        await axios.get('http://dnd5eapi.co/api/rules')
            .then(response => {
                res.json(response.data);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    },
    async getRuleByName(req, res) {
        await axios.get(`http://dnd5eapi.co/api/rules/${req.params.name}`)
            .then(response => {
                res.json(response.data);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    }
};