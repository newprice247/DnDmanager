const express = require('express');
const router = express.Router();
const { getMagicSchools, getMagicSchoolByName } = require('../../../controllers/magicSchools');

router.get('/', getMagicSchools);
router.get('/:name', getMagicSchoolByName);

module.exports = router;