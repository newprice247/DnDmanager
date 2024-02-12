const express = require('express');
const router = express.Router();
const { 
    getDamageTypes,
    getDamageTypeByName,
} = require('../../../controllers/damageTypes');

router.get('/', getDamageTypes);

router.get('/:name', getDamageTypeByName);

module.exports = router;