const axios = require('axios');

module.exports = {
    getAlignments(req, res) {
        axios.get('http://dnd5eapi.co/api/alignments')
            .then(response => {
                res.json(response.data);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    }
};