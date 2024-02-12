const express = require('express');
const router = express.Router();
const { getFeatures, getFeatureByName } = require('../../../controllers/features');

router.get('/', getFeatures);
router.get('/:name', getFeatureByName);

module.exports = router;