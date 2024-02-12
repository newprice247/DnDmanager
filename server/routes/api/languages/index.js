const express = require('express');
const router = express.Router();
const { getLanguages, getLanguageByName } = require('../../../controllers/dnd/languages');

router.get('/', getLanguages);
router.get('/:name', getLanguageByName);

module.exports = router;