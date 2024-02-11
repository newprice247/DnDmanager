const axios = require('axios');

module.exports = {
    getFeatures(req, res) {
        axios.get('http://dnd5eapi.co/api/features')
            .then(response => {
                res.json(response.data);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    }
};