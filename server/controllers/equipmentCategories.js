const axios = require('axios');

module.exports = {
    getEquipmentCategories(req, res) {
        axios.get('http://dnd5eapi.co/api/equipment-categories')
            .then(response => {
                res.json(response.data);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    }
};