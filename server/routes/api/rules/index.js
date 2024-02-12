const express = require('express');
const router = express.Router();
const { getRules } = require('../../../controllers/rules');

router.get('/', getRules);

module.exports = router;