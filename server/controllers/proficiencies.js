const axios = require('axios');

module.exports = {
    async getProficiencies(req, res) {
        await axios.get('http://dnd5eapi.co/api/proficiencies')
            .then(response => {
                res.json(response.data);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    },
    async getProficiencyByName(req, res) {
        await axios.get(`http://dnd5eapi.co/api/proficiencies/${req.params.name}`)
            .then(response => {
                res.json(response.data);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    }
};