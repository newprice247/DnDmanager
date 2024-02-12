const express = require('express');
const router = express.Router();
const { getDamageTypes } = require('../../../controllers/damageTypes');

router.get('/', getDamageTypes);

module.exports = router;