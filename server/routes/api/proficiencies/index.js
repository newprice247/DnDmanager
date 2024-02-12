const express = require('express');
const router = express.Router();
const { getProficiencies } = require('../../../controllers/proficiencies');

router.get('/', getProficiencies);

module.exports = router;