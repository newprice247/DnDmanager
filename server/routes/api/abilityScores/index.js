const express = require('express');
const router = express.Router();
const {
    getAbilityScores,
    getAbilityScoreByName
} = require('../../../controllers/dnd/abilityScores');

router.get('/', getAbilityScores);

router.get('/:name', getAbilityScoreByName);

module.exports = router;