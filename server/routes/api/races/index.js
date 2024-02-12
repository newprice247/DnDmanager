const express = require('express');
const router = express.Router();
const { getRaces, getRaceByName } = require('../../../controllers/races');

router.get('/', getRaces);
router.get('/:name', getRaceByName);

module.exports = router;