const axios = require('axios');

module.exports = {
    getMagicSchools(req, res) {
        axios.get('http://dnd5eapi.co/api/magic-schools')
            .then(response => {
                res.json(response.data);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    }
};