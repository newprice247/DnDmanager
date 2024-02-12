const express = require('express');
const router = express.Router();
const { getRaces } = require('../../../controllers/races');

router.get('/', getRaces);

module.exports = router;