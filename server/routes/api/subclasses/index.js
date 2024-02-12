const express = require('express');
const router = express.Router();
const { getSubclasses, getSubclassByName } = require('../../../controllers/dnd/subclasses');

router.get('/', getSubclasses);
router.get('/:name', getSubclassByName);

module.exports = router;