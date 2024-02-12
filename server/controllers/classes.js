const axios = require('axios');

module.exports = {
    async getClasses(req, res) {
        await axios.get('http://dnd5eapi.co/api/classes')
            .then(response => {
                res.json(response.data);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    },
    async getClassByName(req, res) {
        await axios.get(`http://dnd5eapi.co/api/classes/${req.params.name}`)
            .then(response => {
                res.json(response.data);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    }
};