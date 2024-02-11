const axios = require('axios');

module.exports = {
    getRaces(req, res) {
        axios.get('http://dnd5eapi/api/races')
            .then(response => {
                res.json(response.data);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    }
};