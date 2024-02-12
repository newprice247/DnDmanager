const axios = require('axios');

module.exports = {
    async getMagicSchools(req, res) {
        await axios.get('http://dnd5eapi.co/api/magic-schools')
            .then(response => {
                res.json(response.data);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    },
    async getMagicSchoolByName(req, res) {
        await axios.get(`http://dnd5eapi.co/api/magic-schools/${req.params.name}`)
            .then(response => {
                res.json(response.data);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    }
};