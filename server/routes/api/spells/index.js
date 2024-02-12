const express = require('express');
const router = express.Router();
const { getSpells, getSpellByName } = require('../../../controllers/spells');

router.get('/', getSpells);
router.get('/:name', getSpellByName);

module.exports = router;