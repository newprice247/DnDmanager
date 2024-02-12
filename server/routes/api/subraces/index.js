const express = require('express');
const router = express.Router();
const { getSubraces, getSubraceByName } = require('../../../controllers/dnd/subraces');

router.get('/', getSubraces);
router.get('/:name', getSubraceByName);

module.exports = router;