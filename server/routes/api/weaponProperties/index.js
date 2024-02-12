const express = require('express');
const router = express.Router();
const { getWeaponProperties, getWeaponPropertyByName } = require('../../../controllers/dnd/weaponProperties');

router.get('/', getWeaponProperties);
router.get('/:name', getWeaponPropertyByName);

module.exports = router;