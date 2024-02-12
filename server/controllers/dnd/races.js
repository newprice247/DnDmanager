const axios = require('axios');

module.exports = {
    async getRaces(req, res) {
        await axios.get('http://dnd5eapi/api/races')
            .then(response => {
                res.json(response.data);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    },
    async getRaceByName(req, res) {
        await axios.get(`http://dnd5eapi/api/races/${req.params.name}`)
            .then(response => {
                res.json(response.data);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    }
};