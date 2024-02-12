const express = require('express');
const router = express.Router();
const { getMagicSchools, getMagicSchoolByName } = require('../../../controllers/dnd/magicSchools');

router.get('/', getMagicSchools);
router.get('/:name', getMagicSchoolByName);

module.exports = router;