const axios = require('axios');

module.exports = {
    async getSkills(req, res) {
       await axios.get('http://dnd5eapi.co/api/skills')
            .then(response => {
                res.json(response.data);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    },
    async getSkillByName(req, res) {
        await axios.get(`http://dnd5eapi.co/api/skills/${req.params.name}`)
            .then(response => {
                res.json(response.data);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    }
};