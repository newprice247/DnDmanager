const express = require('express');
const router = express.Router();
const { getTraits, getTraitByName } = require('../../../controllers/dnd/traits');

router.get('/', getTraits);
router.get('/:name', getTraitByName);

module.exports = router;