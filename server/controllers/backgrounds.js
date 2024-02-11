const axios = require('axios');

module.exports = {
    getBackgrounds: async (req, res) => {
        await axios.get('http://dnd5eapi.co/api/backgrounds')
            .then(response => {
                res.json(response.data);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    }
};