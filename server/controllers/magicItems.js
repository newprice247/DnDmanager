const axios = require('axios');

module.exports = {
    getMagicItems(req, res) {
        axios.get('http://dnd5eapi.co/api/magic-items')
            .then(response => {
                res.json(response.data);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    }
};