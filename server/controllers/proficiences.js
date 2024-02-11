const axios = require('axios');

module.exports = {
    getProficiences(req, res) {
        axios.get('http://dnd5eapi.co/api/proficiencies')
            .then(response => {
                res.json(response.data);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    }
};