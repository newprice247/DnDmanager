const express = require('express');
const router = express.Router();
const { getRules, getRuleByName } = require('../../../controllers/dnd/rules');

router.get('/', getRules);
router.get('/:name', getRuleByName);

module.exports = router;