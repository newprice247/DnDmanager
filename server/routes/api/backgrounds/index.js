const express = require('express');
const router = express.Router();
const { getBackgrounds } = require('../../../controllers/backgrounds');

router.get('/', getBackgrounds);

module.exports = router;