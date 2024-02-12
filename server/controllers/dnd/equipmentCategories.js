const axios = require('axios');

module.exports = {
    async getEquipmentCategories(req, res) {
        await axios.get('http://dnd5eapi.co/api/equipment-categories')
            .then(response => {
                res.json(response.data);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    },
    async getEquipmentCategoryByName(req, res) {
        await axios.get(`http://dnd5eapi.co/api/equipment-categories/${req.params.name}`)
            .then(response => {
                res.json(response.data);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    }
};