const axios = require('axios');

module.exports = {
    getMonsters(req, res) {
        axios.get('http://dnd5eapi.co/api/monsters')
            .then(response => {
                res.json(response.data);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    }
};