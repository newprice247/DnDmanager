const axios = require('axios');

module.exports = {
    getDamageTypes(req, res) {
        axios.get('http://dnd5eapi.co/api/damage-types')
            .then(response => {
                res.json(response.data);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    }
};