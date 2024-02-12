const axios = require('axios');

module.exports = {
    async getRuleSections(req, res) {
       await axios.get('http://dnd5eapi.co/api/rule-sections')
            .then(response => {
                res.json(response.data);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    },
    async getRuleSectionByName(req, res) {
        await axios.get(`http://dnd5eapi.co/api/rule-sections/${req.params.name}`)
            .then(response => {
                res.json(response.data);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    }
};