const express = require('express');
const router = express.Router();
const { getFeatures } = require('../../../controllers/features');

router.get('/', getFeatures);

module.exports = router;