const axios = require('axios');

module.exports = {
    getAbilityScores: function(req, res) {
        axios.get('http://www.dnd5eapi.co/api/ability-scores')
            .then(response => {
                res.json(response.data);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    }
};

