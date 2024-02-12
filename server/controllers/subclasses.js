const axios = require('axios');

module.exports = {
    async getSubclasses(req, res) {
        await axios.get('http://dnd5eapi.co/api/subclasses')
            .then(response => {
                res.json(response.data);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    },
    async getSubclassByName(req, res) {
        await axios.get(`http://dnd5eapi.co/api/subclasses/${req.params.name}`)
            .then(response => {
                res.json(response.data);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    }
};