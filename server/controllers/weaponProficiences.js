const axios = require('axios');

module.exports = {
    getWeaponProficiences(req, res) {
        axios.get('http://dnd5eapi.co/api/weapon-proficiencies')
            .then(response => {
                res.json(response.data);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    }
};