const express = require('express');
const router = express.Router();
const { 
    getClasses,
    getClassByName
} = require('../../../controllers/dnd/classes');

router.get('/', getClasses);

router.get('/:name', getClassByName);

module.exports = router;