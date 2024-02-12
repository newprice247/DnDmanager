const express = require('express');
const router = express.Router();
const { getClasses } = require('../../../controllers/classes');

router.get('/', getClasses);

module.exports = router;