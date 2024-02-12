const express = require('express');
const router = express.Router();
const { getMagicSchools } = require('../../../controllers/magicSchools');

router.get('/', getMagicSchools);

module.exports = router;