const express = require('express');
const router = express.Router();
const { getSkills } = require('../../../controllers/skills');

router.get('/', getSkills);

module.exports = router;