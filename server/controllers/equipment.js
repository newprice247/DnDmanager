const axios = require('axios');

module.exports = {
    getEquipment(req, res) {
        axios.get('http://dnd5eapi.co/api/equipment')
            .then(response => {
                res.json(response.data);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    }
};