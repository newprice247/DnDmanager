const express = require('express');
const router = express.Router();
const { getSubraces } = require('../../../controllers/subraces');

router.get('/', getSubraces);

module.exports = router;