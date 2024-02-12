const axios = require('axios');

module.exports = {
    getWeaponProperties(req, res) {
        axios.get('http://dnd5eapi.co/api/weapon-properties/')
            .then(response => {
                res.json(response.data);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    }
};