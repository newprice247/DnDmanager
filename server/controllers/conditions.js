const axios = require('axios');

module.exports = {
    getConditions(req, res) {
        axios.get('http://dnd5eapi.co/api/conditions')
            .then(response => {
                res.json(response.data);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    }
};