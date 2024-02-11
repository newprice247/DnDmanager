const axios = require('axios');

module.exports = {
    getSpells(req, res) {
        axios.get('http://dnd5eapi.co/api/spells')
            .then(response => {
                res.json(response.data);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    }
};