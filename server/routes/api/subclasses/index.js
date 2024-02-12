const express = require('express');
const router = express.Router();
const { getSubclasses } = require('../../../controllers/subclasses');

router.get('/', getSubclasses);

module.exports = router;