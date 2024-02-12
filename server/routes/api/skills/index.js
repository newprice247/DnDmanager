const express = require('express');
const router = express.Router();
const { getSkills, getSkillByName } = require('../../../controllers/skills');

router.get('/', getSkills);
router.get('/:name', getSkillByName);

module.exports = router;