const express = require('express');
const router = express.Router();
const { getMagicItems, getMagicItemByName } = require('../../../controllers/dnd/magicItems');

router.get('/', getMagicItems);
router.get('/:name', getMagicItemByName);

module.exports = router;