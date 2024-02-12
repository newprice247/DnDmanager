const express = require('express');
const router = express.Router();
const { getAlignments } = require('../../../controllers/alignments');

router.get('/', getAlignments);

module.exports = router;