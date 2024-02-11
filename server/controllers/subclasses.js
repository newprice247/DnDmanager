const axios = require('axios');

module.exports = {
    getSubclasses(req, res) {
        axios.get('http://dnd5eapi.co/api/subclasses')
            .then(response => {
                res.json(response.data);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    }
};