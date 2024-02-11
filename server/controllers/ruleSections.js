const axios = require('axios');

module.exports = {
    getRuleSections(req, res) {
        axios.get('http://dnd5eapi.co/api/rule-sections')
            .then(response => {
                res.json(response.data);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    }
};