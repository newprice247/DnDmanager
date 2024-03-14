const express = require('express');
const router = express.Router();
const { getCharacters, getCharacter, createCharacter } = require('../../../controllers/character/characterControllers');

router.get('/', getCharacters);
router.get('/:id', getCharacter);

router.post('/', createCharacter);

module.exports = router;