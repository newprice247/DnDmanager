const axios = require('axios');

module.exports = {
    async getAbilityScores(req, res) {
        await axios.get('http://www.dnd5eapi.co/api/ability-scores')
            .then(response => {
                res.json(response.data);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    },
    async getAbilityScoreByName(req, res) {
        await axios.get(`http://www.dnd5eapi.co/api/ability-scores/${req.params.name}`)
            .then(response => {
                res.json(response.data);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    }
};

