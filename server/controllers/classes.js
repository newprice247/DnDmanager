const axios = require('axios');

module.exports = {
    getClasses(req, res) {
        axios.get('http://dnd5eapi.co/api/classes')
            .then(response => {
                res.json(response.data);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    }
};