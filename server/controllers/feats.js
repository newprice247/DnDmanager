const axios = require('axios');

module.exports = {
    getFeats(req, res) {
        axios.get('http://dnd5eapi.co/api/feats')
            .then(response => {
                res.json(response.data);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    }
};