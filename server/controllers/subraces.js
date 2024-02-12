const axios = require('axios');

module.exports = {
    async getSubraces(req, res) {
        await axios.get('http://dnd5eapi.co/api/subraces')
            .then(response => {
                res.json(response.data);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    },
    async getSubraceByName(req, res) {
        await axios.get(`http://dnd5eapi.co/api/subraces/${req.params.name}`)
            .then(response => {
                res.json(response.data);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    }
};