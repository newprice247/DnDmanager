const express = require('express');
const router = express.Router();
const { getFeats, getFeatByName } = require('../../../controllers/feats');

router.get('/', getFeats);
router.get('/:name', getFeatByName);

module.exports = router;