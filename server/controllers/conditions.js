const axios = require('axios');

module.exports = {
    async getConditions(req, res) {
        await axios.get('http://dnd5eapi.co/api/conditions')
            .then(response => {
                res.json(response.data);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    },
    async getConditionByName(req, res) {
        await axios.get(`http://dnd5eapi.co/api/conditions/${req.params.name}`)
            .then(response => {
                res.json(response.data);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    }
};