const express = require('express');
const router = express.Router();
const { getTraits } = require('../../../controllers/traits');

router.get('/', getTraits);

module.exports = router;