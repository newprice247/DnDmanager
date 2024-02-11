const express = require('express');
const router = express.Router();
const { getAbilityScores } = require('../../../controllers/abilityScores');

router.get('/', getAbilityScores);

module.exports = router;