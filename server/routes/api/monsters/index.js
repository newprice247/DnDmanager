const express = require('express');
const router = express.Router();
const { getMonsters, getMonsterByName } = require('../../../controllers/dnd/monsters');

router.get('/', getMonsters);
router.get('/:name', getMonsterByName);

module.exports = router;