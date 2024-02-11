const axios = require('axios');

module.exports = {
    getTraits(req, res) {
        axios.get('http://dnd5eapi.co/api/traits')
            .then(response => {
                res.json(response.data);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    }
};