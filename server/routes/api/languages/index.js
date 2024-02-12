const express = require('express');
const router = express.Router();
const { getLanguages } = require('../../../controllers/languages');

router.get('/', getLanguages);

module.exports = router;