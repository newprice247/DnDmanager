const express = require('express');
const router = express.Router();
const {
    getAlignments,
    getAlignmentByName
} = require('../../../controllers/dnd/alignments');

router.get('/', getAlignments);

router.get('/:name', getAlignmentByName);

module.exports = router;