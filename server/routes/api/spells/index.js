const express = require('express');
const router = express.Router();
const { getSpells } = require('../../../controllers/spells');

router.get('/', getSpells);

module.exports = router;