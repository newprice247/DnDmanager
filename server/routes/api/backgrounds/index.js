const express = require('express');
const router = express.Router();
const { getBackgrounds, getAcolyte } = require('../../../controllers/dnd/backgrounds');

router.get('/', getBackgrounds);
router.get('/acolyte', getAcolyte);

module.exports = router;