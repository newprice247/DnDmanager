const axios = require('axios');

module.exports = {
    getLanguages(req, res) {
        axios.get('http://dnd5eapi.co/api/languages')
            .then(response => {
                res.json(response.data);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    }
};