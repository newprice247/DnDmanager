const express = require('express');
const router = express.Router();
const { getProficiencies, getProficiencyByName } = require('../../../controllers/proficiencies');

router.get('/', getProficiencies);
router.get('/:name', getProficiencyByName);

module.exports = router;