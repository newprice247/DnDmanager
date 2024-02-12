const axios = require('axios');

module.exports = {
    async getAlignments(req, res) {
        await axios.get('http://dnd5eapi.co/api/alignments')
            .then(response => {
                res.json(response.data);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    },
    async getAlignmentByName(req, res) {
        await axios.get(`http://dnd5eapi.co/api/alignments/${req.params.name}`)
            .then(response => {
                res.json(response.data);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    }

};