const express = require('express');
const router = express.Router();
const { getRuleSections } = require('../../../controllers/ruleSections');

router.get('/', getRuleSections);

module.exports = router;