const express = require('express');
const router = express.Router();
const { getWeaponProperties } = require('../../../controllers/weaponProperties');

router.get('/', getWeaponProperties);

module.exports = router;