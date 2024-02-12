const axios = require('axios');

module.exports = {
    async getEquipment(req, res) {
        await axios.get('http://dnd5eapi.co/api/equipment')
            .then(response => {
                res.json(response.data);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    },
    async getEquipmentByName(req, res) {
        await axios.get(`http://dnd5eapi.co/api/equipment/${req.params.name}`)
            .then(response => {
                res.json(response.data);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    }
};