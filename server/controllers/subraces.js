const axios = require('axios');

module.exports = {
    getSubraces(req, res) {
        axios.get('http://dnd5eapi.co/api/subraces')
            .then(response => {
                res.json(response.data);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    }
};