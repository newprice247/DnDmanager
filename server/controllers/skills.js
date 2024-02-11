const axios = require('axios');

module.exports = {
    getSkills(req, res) {
        axios.get('http://dnd5eapi.co/api/skills')
            .then(response => {
                res.json(response.data);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    }
};