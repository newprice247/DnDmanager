const axios = require('axios');

module.exports = {
    getRules(req, res) {
        axios.get('http://dnd5eapi.co/api/rules')
            .then(response => {
                res.json(response.data);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    }
};