const express = require('express');
const router = express.Router();
const { getCharacters, getCharacter } = require('../../../controllers/character/characterControllers');

router.get('/', getCharacters);
router.get('/:name', getCharacter);

module.exports = router;