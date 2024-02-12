const express = require('express');
const router = express.Router();
const { getRuleSections, getRuleSectionByName } = require('../../../controllers/ruleSections');

router.get('/', getRuleSections);
router.get('/:name', getRuleSectionByName);

module.exports = router;