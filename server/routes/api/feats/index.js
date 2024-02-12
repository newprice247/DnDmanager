const express = require('express');
const router = express.Router();
const { getFeats } = require('../../../controllers/feats');

router.get('/', getFeats);

module.exports = router;