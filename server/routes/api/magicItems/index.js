const express = require('express');
const router = express.Router();
const { getMagicItems } = require('../../../controllers/magicItems');

router.get('/', getMagicItems);

module.exports = router;