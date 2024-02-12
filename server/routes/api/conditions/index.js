const express = require('express');
const router = express.Router();
const { 
    getConditions,
    getConditionByName
} = require('../../../controllers/conditions');

router.get('/', getConditions);

router.get('/:name', getConditionByName);

module.exports = router;